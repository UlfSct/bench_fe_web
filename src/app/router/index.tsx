import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from '@/app/layouts/AuthLayout';
import { AuthOnlyRoute } from '@/app/router/guards/AuthOnlyRoute';
import { NoAuthOnlyRoute } from '@/app/router/guards/NoAuthOnlyRoute';
import { routerPaths } from './paths.ts';

import LandingPage from '@/pages/Landing';
import AppPage from '@/pages/Main';
import LoginPage from '@/pages/auth/Login';
import RegisterPage from '@/pages/auth/Register';
import ForgotPasswordPage from '@/pages/auth/ForgotPassword';
import ResetPasswordPage from '@/pages/mail/ResetPassword';
import VerifyEmailPage from '@/pages/mail/VerifyEmail';
import ChangeEmailPage from '@/pages/mail/ChangeEmail';
import NotFoundPage from '@/pages/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                element: <AuthOnlyRoute />,
                children: [{ index: true, element: <LandingPage /> }],
            },
            {
                element: <NoAuthOnlyRoute />,
                children: [
                    {
                        element: <AuthLayout />,
                        children: [
                            { path: routerPaths.LOGIN.slice(1), element: <LoginPage /> },
                            { path: routerPaths.REGISTER.slice(1), element: <RegisterPage /> },
                            { path: routerPaths.FORGOT_PASSWORD.slice(1), element: <ForgotPasswordPage /> },
                        ],
                    },
                ],
            },

            { path: routerPaths.APP.slice(1), element: <AppPage /> },
            { path: routerPaths.RESET_PASSWORD.slice(1), element: <ResetPasswordPage /> },
            { path: routerPaths.VERIFY_EMAIL.slice(1), element: <VerifyEmailPage /> },
            { path: routerPaths.CHANGE_EMAIL.slice(1), element: <ChangeEmailPage /> },
            { path: routerPaths.NOT_FOUND, element: <NotFoundPage /> },
        ],
    },
]);
