import { FontAwesomeSvgIcon } from '@/style/Icon';
import { faBookSkull } from '@fortawesome/free-solid-svg-icons';
import { PhoneInTalk, PictureAsPdf, Visibility, VisibilityOff } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

export const nagIcons: Record<string, JSX.Element> = {
    $1300: <Visibility fontSize='inherit' sx={{ verticalAlign: 'middle' }} />,
    $1301: <VisibilityOff fontSize='inherit' sx={{ verticalAlign: 'middle' }} />,
    $1302: <PhoneInTalk fontSize='inherit' sx={{ verticalAlign: 'middle' }} />,
    $1303: (
        <FontAwesomeSvgIcon
            icon={faBookSkull}
            fontSize='inherit'
            sx={{ verticalAlign: 'middle' }}
        />
    ),
    $1304: <PictureAsPdf fontSize='inherit' sx={{ verticalAlign: 'middle' }} />,
    $1305: (
        <SvgIcon fontSize='inherit' sx={{ verticalAlign: 'middle' }}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M19.31,5.6C18.09,5.56 16.88,6.5 16.5,8C16,10 16,10 15,11C13,13 10,14 4,15C3,15.16 2.5,15.5 2,16C4,16 6,16 4.5,17.5L3,19H6L8,17C10,18 11.33,18 13.33,17L14,19H17L16,16C16,16 17,12 18,11C19,10 19,11 20,11C21,11 22,10 22,8.5C22,8 22,7 20.5,6C20.15,5.76 19.74,5.62 19.31,5.6M9,6A6,6 0 0,0 3,12C3,12.6 3.13,13.08 3.23,13.6C9.15,12.62 12.29,11.59 13.93,9.94L14.43,9.44C13.44,7.34 11.32,6 9,6Z' />
            </svg>
        </SvgIcon>
    ),
    $1306: (
        <SvgIcon fontSize='inherit' sx={{ verticalAlign: 'middle' }}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M18.05,21L15.32,16.26C15.32,14.53 14.25,13.42 12.95,13.42C12.05,13.42 11.27,13.92 10.87,14.66C11.2,14.47 11.59,14.37 12,14.37C13.3,14.37 14.36,15.43 14.36,16.73C14.36,18.04 13.31,19.11 12,19.11H15.3V21H6.79C6.55,21 6.3,20.91 6.12,20.72C5.75,20.35 5.75,19.75 6.12,19.38V19.38L6.62,18.88C6.28,18.73 6,18.5 5.72,18.26C5.5,18.76 5,19.11 4.42,19.11C3.64,19.11 3,18.47 3,17.68C3,16.9 3.64,16.26 4.42,16.26L4.89,16.34V14.37C4.89,11.75 7,9.63 9.63,9.63H9.65C11.77,9.64 13.42,10.47 13.42,9.16C13.42,8.23 13.62,7.86 13.96,7.34C13.23,7 12.4,6.79 11.53,6.79C11,6.79 10.58,6.37 10.58,5.84C10.58,5.41 10.86,5.05 11.25,4.93L10.58,4.89C10.06,4.89 9.63,4.47 9.63,3.95C9.63,3.42 10.06,3 10.58,3H11.53C13.63,3 15.47,4.15 16.46,5.85L16.74,5.84C17.45,5.84 18.11,6.07 18.65,6.45L19.1,6.83C21.27,8.78 21,10.1 21,10.11C21,11.39 19.94,12.44 18.65,12.44L18.16,12.39V12.47C18.16,13.58 17.68,14.57 16.93,15.27L20.24,21H18.05M18.16,7.74C17.63,7.74 17.21,8.16 17.21,8.68C17.21,9.21 17.63,9.63 18.16,9.63C18.68,9.63 19.11,9.21 19.11,8.68C19.11,8.16 18.68,7.74 18.16,7.74Z' />
            </svg>
        </SvgIcon>
    ),
};

export const nagSvgs: Record<string, string> = {
    $1300: `<g transform="translate(79 -4)" fill="white"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"></path></g>`,
    $1301: `<g transform="translate(79 -4)" fill="white"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"></path></g>`,
    $1302: `<g transform="translate(79 -4)" fill="white"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"></path></g>`,
    $1303: `<g transform="translate(79 -5) scale(0.05)" fill="white"><path d="M0 96C0 43 43 0 96 0L384 0l32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32zM320 112c0-35.3-35.8-64-80-64s-80 28.7-80 64c0 20.9 12.6 39.5 32 51.2l0 12.8c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16l0-12.8c19.4-11.7 32-30.3 32-51.2zM208 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM134.3 209.3c-8.1-3.5-17.5 .3-21 8.4s.3 17.5 8.4 21L199.4 272l-77.7 33.3c-8.1 3.5-11.9 12.9-8.4 21s12.9 11.9 21 8.4L240 289.4l105.7 45.3c8.1 3.5 17.5-.3 21-8.4s-.3-17.5-8.4-21L280.6 272l77.7-33.3c8.1-3.5 11.9-12.9 8.4-21s-12.9-11.9-21-8.4L240 254.6 134.3 209.3z"></path></g>`,
    $1304: `<g transform="translate(79 -4)" fill="white"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5zm4-3H19v1h1.5V11H19v2h-1.5V7h3zM9 9.5h1v-1H9zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm10 5.5h1v-3h-1z"></path></g>`,
    $1305: `<g transform="translate(78, -6) scale(1.2)" fill="white"><path d='M19.31,5.6C18.09,5.56 16.88,6.5 16.5,8C16,10 16,10 15,11C13,13 10,14 4,15C3,15.16 2.5,15.5 2,16C4,16 6,16 4.5,17.5L3,19H6L8,17C10,18 11.33,18 13.33,17L14,19H17L16,16C16,16 17,12 18,11C19,10 19,11 20,11C21,11 22,10 22,8.5C22,8 22,7 20.5,6C20.15,5.76 19.74,5.62 19.31,5.6M9,6A6,6 0 0,0 3,12C3,12.6 3.13,13.08 3.23,13.6C9.15,12.62 12.29,11.59 13.93,9.94L14.43,9.44C13.44,7.34 11.32,6 9,6Z' /></g>`,
    $1306: `<g transform="translate(77, -8) scale(1.2)" fill="white"><path d='M18.05,21L15.32,16.26C15.32,14.53 14.25,13.42 12.95,13.42C12.05,13.42 11.27,13.92 10.87,14.66C11.2,14.47 11.59,14.37 12,14.37C13.3,14.37 14.36,15.43 14.36,16.73C14.36,18.04 13.31,19.11 12,19.11H15.3V21H6.79C6.55,21 6.3,20.91 6.12,20.72C5.75,20.35 5.75,19.75 6.12,19.38V19.38L6.62,18.88C6.28,18.73 6,18.5 5.72,18.26C5.5,18.76 5,19.11 4.42,19.11C3.64,19.11 3,18.47 3,17.68C3,16.9 3.64,16.26 4.42,16.26L4.89,16.34V14.37C4.89,11.75 7,9.63 9.63,9.63H9.65C11.77,9.64 13.42,10.47 13.42,9.16C13.42,8.23 13.62,7.86 13.96,7.34C13.23,7 12.4,6.79 11.53,6.79C11,6.79 10.58,6.37 10.58,5.84C10.58,5.41 10.86,5.05 11.25,4.93L10.58,4.89C10.06,4.89 9.63,4.47 9.63,3.95C9.63,3.42 10.06,3 10.58,3H11.53C13.63,3 15.47,4.15 16.46,5.85L16.74,5.84C17.45,5.84 18.11,6.07 18.65,6.45L19.1,6.83C21.27,8.78 21,10.1 21,10.11C21,11.39 19.94,12.44 18.65,12.44L18.16,12.39V12.47C18.16,13.58 17.68,14.57 16.93,15.27L20.24,21H18.05M18.16,7.74C17.63,7.74 17.21,8.16 17.21,8.68C17.21,9.21 17.63,9.63 18.16,9.63C18.68,9.63 19.11,9.21 19.11,8.68C19.11,8.16 18.68,7.74 18.16,7.74Z' /></g>`,
};
