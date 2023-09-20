import { Navigate, createBrowserRouter } from 'react-router-dom';
import AuthGuard from '../guards/Auth.guard';
import GuestGuard from '../guards/Guest.guard';
// Pages
import WelcomePage from '../pages/Welcome.page';
import SamplePage from '../pages/Sample.page';
import AuthPage from '../pages/Auth.page';
import UserPage from '../pages/User.page';
import ErrorPage from '../pages/Error.page';

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
        path: '/welcome',
        element: (
            <GuestGuard>
                <WelcomePage />
            </GuestGuard>
        ),
    },
    {
        path: '/sample',
        element: (
            <GuestGuard>
                <SamplePage />
            </GuestGuard>
        ),
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
