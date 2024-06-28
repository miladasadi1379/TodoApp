'use client';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        button: {
            backgroundColor: '#fff',
        },
        fontFamily: 'BYekan',
    },
    palette: {
        background: {
            default: '#F1F8E8',
            paper: '#D8EFD3'
        },
        text: {
            primary: '#55AD9B',
            secondary: '#95D2B3'
        },
        divider: '#D8EFD3',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: ({ ownerState }) => ({
                    ...(
                        ownerState.variant === 'contained' &&
                        ownerState.color === 'primary' && {
                            backgroundColor: '#55AD9B',
                            color: '#fff',
                        }),

                    "&:hover": {
                        backgroundColor: '#95D2B3',
                    },
                    "&:active": {
                        backgroundColor: '#95D2B3',

                    },
                    variants: [
                        {
                            props: { variant: 'text' },
                            style: {
                                textTransform: 'none',
                                background: `none`,

                            },
                        },
                        {
                            props: { variant: 'text', color: 'secondary' },
                            style: {
                                background: `none`,
                            },
                        },
                    ],

                }),
            },
        },

    }

});

export default theme;
