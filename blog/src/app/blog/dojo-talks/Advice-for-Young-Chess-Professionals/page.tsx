import logoBlack from '@/app/logoBlack.png';
import { Container, Divider, Stack, Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';
import { ReactNode } from 'react';
import { Header } from '../../common/Header';

export const metadata: Metadata = {
    title: 'Advice for Young Chess Professionals ft. GM Sam Shankland | Dojo Talks',
    description:
        "GM Sam Shankland, GM Jesse Kraai, IM David Pruess, and IM Kostya Kavutskiy talk about what it takes to have a career in chess, whether as a tournament player or chess content creator, in today's episode of Dojo Talks, the ChessDojo podcast.",
};

const SectionHeader = ({ children }: { children: ReactNode }) => (
    <Typography variant='subtitle1' fontWeight='bold' sx={{ mt: 3 }}>
        {children}
    </Typography>
);

export default function DojoTalksTop2025() {
    return (
        <Container maxWidth='sm' sx={{ py: 5 }}>
            <Header
                title={
                    <>
                        Advice for Young Chess Professionals ft. GM Sam Shankland | Dojo
                        Talks
                    </>
                }
                subtitle='Jesse, Kostya, & David • June 25, 2024'
            />

            <Typography mb={3}>
                GM Sam Shankland, GM Jesse Kraai, IM David Pruess, and IM Kostya Kavutskiy
                talk about what it takes to have a career in chess, whether as a
                tournament player or chess content creator, in today's episode of Dojo
                Talks, the ChessDojo podcast.
            </Typography>

            <iframe
                width='100%'
                style={{ aspectRatio: '16 / 9' }}
                src='https://www.youtube.com/embed/0nO5edb__9M?si=pC30T0nHjkmOxA5w'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
            />

            <Typography variant='h5' sx={{ mt: 5 }}>
                Summary of episode
            </Typography>

            <SectionHeader>Introduction - 00:04 to 00:33</SectionHeader>
            <Typography>
                Sam introduces the episode's topic: Balancing chess improvement with adult
                responsibilities.
            </Typography>

            <SectionHeader>
                Challenges Faced by Young Adults in Chess - 00:33 - 01:27
            </SectionHeader>
            <Typography>
                Discussion on the transition from childhood to adulthood and the
                associated challenges in continuing chess.
            </Typography>

            <SectionHeader>
                Making a Career in Chess without Top-Level Skill - 01:27 - 03:19
            </SectionHeader>
            <Typography>
                How to make a living from chess even if not a top player, focusing on
                teaching and marketing oneself.
            </Typography>

            <SectionHeader>Ethics in Chess Teaching - 03:19 - 04:23</SectionHeader>
            <Typography>
                Anecdote about a chess teacher who falsely claimed a title and the
                importance of integrity.
            </Typography>

            <SectionHeader>
                Financial Challenges in Chess Improvement - 04:23 - 06:56
            </SectionHeader>
            <Typography>
                Discussing the financial difficulties in advancing from IM to GM and
                strategies to manage this.
            </Typography>

            <SectionHeader>Balancing Teaching and Playing - 06:56 - 10:54</SectionHeader>
            <Typography>
                The balance between teaching chess and improving one's own game, and how
                teaching can be beneficial.
            </Typography>

            <SectionHeader>
                Financial Stability and Playing Style - 10:54 - 13:28
            </SectionHeader>
            <Typography>
                The importance of financial stability in allowing an aggressive and
                ambitious playing style.
            </Typography>

            <SectionHeader>Experience Sharing and Learning - 13:28 - 16:34</SectionHeader>
            <Typography>
                The benefits of teaching and how it can improve personal chess
                understanding.{' '}
            </Typography>

            <SectionHeader>Health and Lifestyle in Chess - 16:34 - 22:33</SectionHeader>
            <Typography>
                The significance of maintaining good health, nutrition, and exercise for
                chess performance.
            </Typography>

            <SectionHeader>
                Income Variability Among Chess Players - 22:33 - 29:59
            </SectionHeader>
            <Typography>
                Discussion on the financial disparities among chess players and the
                various ways they can make money.
            </Typography>

            <SectionHeader>
                Adapting and Learning from Younger Players - 29:59 - 43:26
            </SectionHeader>
            <Typography>
                How older players can benefit from learning new techniques and approaches
                from younger players.
            </Typography>

            <SectionHeader>
                Balancing Professional Chess with Personal Life - 43:26 - 50:15
            </SectionHeader>
            <Typography>
                The importance of having a balance between professional goals and personal
                life satisfaction.
            </Typography>

            <SectionHeader>
                College Education and Chess Career - 50:15 - 57:55
            </SectionHeader>
            <Typography>
                The value of college education for chess players and how it can benefit
                their careers outside playing.
            </Typography>

            <SectionHeader>
                Effective Coaching and Peer Learning - 57:55 - 01:02:18
            </SectionHeader>
            <Typography>
                The importance of good coaching and peer learning groups for chess
                improvement.
            </Typography>

            <SectionHeader>
                Wealth and Opportunity in Chess - 01:02:18 - 01:03:00
            </SectionHeader>
            <Typography>
                The role of financial privilege in the success of top chess players.
            </Typography>

            <Divider sx={{ my: 6 }} />

            <Typography fontWeight='bold' textAlign='center'>
                Make sure to follow the DojoTalks podcast
            </Typography>

            <Stack
                direction='row'
                justifyContent='center'
                alignItems='center'
                gap='20px'
                mt={2}
            >
                <a
                    href='https://www.youtube.com/chessdojo'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Image
                        src='https://th.bing.com/th/id/R.aa96dba2d64d799f0d1c6a02e4acdebb?rik=c8ee4vAHUDLR6g&riu=http%3a%2f%2fwww.freeiconspng.com%2fuploads%2fyoutube-icon-21.png&ehk=OC7MLPky6SWdtoLCCQRd94v%2bJ5GAFSBXzcJ%2fu4zbhNE%3d&risl=&pid=ImgRaw&r=0'
                        width={50}
                        height={50}
                        alt='YouTube Logo'
                    />
                </a>

                <a
                    href='https://chessdojotalks.podbean.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <Image
                        src='https://chess-dojo-images.s3.amazonaws.com/emails/podbean+logo.png'
                        width={50}
                        height={50}
                        alt='Podbean Logo'
                    />
                </a>
            </Stack>

            <Stack alignItems='center' mt={4}>
                <a
                    href='https://www.chessdojo.club'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ cursor: 'pointer', textDecoration: 'none' }}
                >
                    <Stack
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        gap='30px'
                        sx={{
                            maxWidth: '400px',
                            backgroundColor: '#F4931E',
                            padding: '20px',
                            borderRadius: '20px',
                            cursor: 'pointer',
                        }}
                    >
                        <Image src={logoBlack} alt='' width={80} height={80} />
                        <Typography fontWeight='bold' textAlign='center' color='black'>
                            Check Out ChessDojo.Club To Improve Your Chess
                        </Typography>
                    </Stack>
                </a>
            </Stack>
        </Container>
    );
}
