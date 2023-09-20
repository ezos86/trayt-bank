import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import router from './navigation/router';
import './i18n/i18n';
import { AuthProvider } from './providers/Auth.provider';

const appTheme = createTheme({
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
