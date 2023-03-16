package database

import (
	"encoding/json"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
	"github.com/jackstenglein/chess-dojo-scheduler/backend/api/errors"
	"github.com/jackstenglein/chess-dojo-scheduler/backend/api/log"
)

type Meeting struct {
	// The username of the person that created the availability
	// that spwaned this meeting.
	Owner string `dynamodbav:"owner" json:"owner"`

	// The other person participating in this meeting.
	Participant string `dynamodbav:"participant" json:"participant"`

	// A v4 UUID identifying this meeting. It is the same as the id of the
	// availability that this meeting was created from.
	Id string `dynamodbav:"id" json:"id"`

	// The time the meeting starts, in full ISO-8601 format.
	StartTime string `dynamodbav:"startTime" json:"startTime"`

	// The time that the meeting will be deleted from the database. This is set
	// to 48 hours after the start time.
	ExpirationTime int64 `dynamodbav:"expirationTime" json:"-"`

	// The game/meeting type that the participants will play
	Type AvailabilityType `dynamodbav:"type" json:"type"`

	// Contains either a zoom link, discord, discord classroom, etc.
	Location string `dynamodbav:"location" json:"location"`

	// An optional description for sparring positions, etc.
	Description string `dynamodbav:"description" json:"description"`

	// The status of the Meeting.
	Status SchedulingStatus `dynamodbav:"status" json:"status"`
}

type MeetingGetter interface {
	UserGetter

	// GetMeeting returns the meeting with the provided id.
	GetMeeting(id string) (*Meeting, error)
}

type MeetingLister interface {
	// ListMeetings returns a list of Meetings matching the provided username.
	// username is required and startKey is optional.
	// The list of meetings and the next start key are returned.
	ListMeetings(username, startKey string) ([]*Meeting, string, error)
}

type MeetingCanceler interface {
	MeetingGetter

	// CancelMeeting marks the provided meeting as canceled and marks the availability
	// it was created from as scheduled. The updated meeting is returned.
	CancelMeeting(meeting *Meeting) (*Meeting, error)

	// RecordMeetingCancelation saves statistics on the canceled meeting.
	RecordMeetingCancelation(cancelerCohort DojoCohort) error
}

type AdminMeetingLister interface {
	UserGetter

	// ScanMeetings returns a list of all Meetings in the database, up to 1MB of data.
	// startKey is an optional parameter that can be used to perform pagination.
	// The list of Meetings and the next start key are returned.
	ScanMeetings(startKey string) ([]*Meeting, string, error)
}

// SetMeeting inserts the provided Meeting into the database.
func (repo *dynamoRepository) SetMeeting(meeting *Meeting) error {
	item, err := dynamodbattribute.MarshalMap(meeting)
	if err != nil {
		return errors.Wrap(500, "Temporary server error", "Unable to marshal meeting", err)
	}

	input := &dynamodb.PutItemInput{
		Item:      item,
		TableName: aws.String(meetingTable),
	}

	_, err = repo.svc.PutItem(input)
	return errors.Wrap(500, "Temporary server error", "Failed Dynamo PutItem request", err)
}

// GetMeeting returns the meeting with the provided id.
func (repo *dynamoRepository) GetMeeting(id string) (*Meeting, error) {
	input := &dynamodb.GetItemInput{
		Key: map[string]*dynamodb.AttributeValue{
			"id": {
				S: aws.String(id),
			},
		},
		TableName: aws.String(meetingTable),
	}

	meeting := Meeting{}
	if err := repo.getItem(input, &meeting); err != nil {
		return nil, err
	}
	return &meeting, nil
}

func (repo *dynamoRepository) fetchMeetings(input *dynamodb.QueryInput, startKey string) ([]*Meeting, string, error) {
	var meetings []*Meeting
	lastKey, err := repo.query(input, startKey, &meetings)
	if err != nil {
		return nil, "", err
	}
	return meetings, lastKey, nil
}

type listMeetingsStartKey struct {
	OwnerKey       string `json:"ownerKey"`
	ParticipantKey string `json:"participantKey"`
}

// ListMeetings returns a list of Meetings matching the provided username.
// username is required and startKey is optional.
// The list of meetings and the next start key are returned.
func (repo *dynamoRepository) ListMeetings(username, startKey string) ([]*Meeting, string, error) {

	// We don't know if the calling user is the owner or participant in the meeting, so we have to query both indices
	// and combine the results

	startKeys := &listMeetingsStartKey{}
	if startKey != "" {
		err := json.Unmarshal([]byte(startKey), startKeys)
		if err != nil {
			return nil, "", errors.Wrap(400, "Invalid request: startKey is not valid", "startKey could not be unmarshaled from json", err)
		}
	}

	lastKeys := listMeetingsStartKey{}
	var meetings = make([]*Meeting, 0)

	if startKey == "" || startKeys.OwnerKey != "" {
		ownerInput := &dynamodb.QueryInput{
			KeyConditionExpression: aws.String("#owner = :username"),
			ExpressionAttributeNames: map[string]*string{
				"#owner": aws.String("owner"),
			},
			ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
				":username": {
					S: aws.String(username),
				},
			},
			IndexName: aws.String("OwnerIndex"),
			TableName: aws.String(meetingTable),
		}
		ownerMeetings, ownerLastKey, err := repo.fetchMeetings(ownerInput, startKeys.OwnerKey)
		if err != nil {
			return nil, "", err
		}

		meetings = append(meetings, ownerMeetings...)
		lastKeys.OwnerKey = ownerLastKey
	}

	if startKey == "" || startKeys.ParticipantKey != "" {
		participantInput := &dynamodb.QueryInput{
			KeyConditionExpression: aws.String("#participant = :username"),
			ExpressionAttributeNames: map[string]*string{
				"#participant": aws.String("participant"),
			},
			ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
				":username": {
					S: aws.String(username),
				},
			},
			IndexName: aws.String("ParticipantIndex"),
			TableName: aws.String(meetingTable),
		}
		participantMeetings, participantLastKey, err := repo.fetchMeetings(participantInput, startKeys.OwnerKey)
		if err != nil {
			return nil, "", err
		}

		meetings = append(meetings, participantMeetings...)
		lastKeys.ParticipantKey = participantLastKey
	}

	var lastKey string
	if lastKeys.OwnerKey != "" || lastKeys.ParticipantKey != "" {
		b, err := json.Marshal(&lastKeys)
		if err != nil {
			return nil, "", errors.Wrap(500, "Temporary server error", "Failed to marshal listMeetingsStartKey", err)
		}
		lastKey = string(b)
	}

	return meetings, lastKey, nil
}

// CancelMeeting marks the provided meeting as canceled and marks the availability
// it was created from as scheduled (on a best effort basis). The updated meeting is
// returned.
func (repo *dynamoRepository) CancelMeeting(meeting *Meeting) (*Meeting, error) {
	meeting.Status = Canceled
	if err := repo.SetMeeting(meeting); err != nil {
		return nil, err
	}

	input := &dynamodb.UpdateItemInput{
		ConditionExpression: aws.String("attribute_exists(id)"),
		UpdateExpression:    aws.String("SET #status = :scheduled"),
		ExpressionAttributeNames: map[string]*string{
			"#status": aws.String("status"),
		},
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
			":scheduled": {
				S: aws.String(string(Scheduled)),
			},
		},
		Key: map[string]*dynamodb.AttributeValue{
			"owner": {
				S: aws.String(meeting.Owner),
			},
			"id": {
				S: aws.String(meeting.Id),
			},
		},
		TableName: aws.String(availabilityTable),
	}

	// Attempt to mark the availability as scheduled on a best-effort basis.
	// If it fails, then we log the error but still return a success to the caller.
	if _, err := repo.svc.UpdateItem(input); err != nil {
		log.Error("Failed to mark availability as scheduled: ", err)
	}

	return meeting, nil
}

// ScanMeetings returns a list of all Meetings in the database, up to 1MB of data.
// startKey is an optional parameter that can be used to perform pagination.
// The list of meetings and the next start key are returned.
func (repo *dynamoRepository) ScanMeetings(startKey string) ([]*Meeting, string, error) {
	input := &dynamodb.ScanInput{
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
			":statistics": {
				S: aws.String("STATISTICS"),
			},
		},
		FilterExpression: aws.String("id <> :statistics"),
		TableName:        aws.String(meetingTable),
	}

	var meetings []*Meeting
	lastKey, err := repo.scan(input, startKey, &meetings)
	if err != nil {
		return nil, "", err
	}
	return meetings, lastKey, nil
}