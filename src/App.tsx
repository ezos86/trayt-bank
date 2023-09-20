import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import router from './navigation/router';
import './i18n/i18n';
import { AuthProvider } from './providers/Auth.provider';

const appTheme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: '#3E68A8',
                    },
                    '& label.Mui-focused': {
                        color: '#3E68A8',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#3E68A8',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#3E68A8',
                        },
                        '&:hover fieldset': {
                            borderColor: '#3E68A8',
                            borderWidth: '0.15rem',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3E68A8',
                        },
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: '1px solid red',
                        },
                        '&:hover fieldset': {
                            borderColor: '#3E68A8',
                            borderWidth: '0.15rem',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3E68A8',
                        },
                    },
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#004990',
        },
    },
});

const App: FC = () => {
    return (
        <ThemeProvider theme={appTheme}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </ThemeProvider>
    );
};

export default App;
