import { Navigate, createBrowserRouter } from 'react-router-dom';
import AuthGuard from '../guards/Auth.guard';
import GuestGuard from '../guards/Guest.guard';
import { LazyExoticComponent, FC, Suspense, lazy } from 'react';
import { CircularProgress } from '@mui/material';

// Pages
import WelcomePage from '../pages/Welcome.page';
import SamplePage from '../pages/Sample.page';
import AuthPage from '../pages/Auth.page';
import UserPage from '../pages/User.page';
import ErrorPage from '../pages/Error.page';
import BankLayout from '../layout/Bank.layout';

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
    (
        <Suspense fallback={<CircularProgress color="primary" />}>
            <Component {...props} />
        </Suspense>
    );

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="welcome" />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/auth',
        element: (
            <GuestGuard>
                <AuthPage />
            </GuestGuard>
        ),
    },
    {
        path: '/bank',
        element: (
            <GuestGuard>
                <BankLayout />
            </GuestGuard>
        ),
        children: [
            {
                path: '',
                element: <WelcomePage />,
            },
            {
                path: 'sample',
                element: <SamplePage />,
            },
        ],
    },
    {
        path: '/user',
        element: (
            <AuthGuard>
                <UserPage />
            </AuthGuard>
        ),
    },
]);

export default router;
