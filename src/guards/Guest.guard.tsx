import React, { Fragment, ReactNode } from 'react';
import useAuth from '../hooks/useAuth.hook';

interface GuestGuardProps {
    children: ReactNode;
}
const GuestGuard = ({ children }: GuestGuardProps) => {
    // Represents pages that we allow user to see without authentication, can check and force to internal pages if needed.

    return <Fragment>{children}</Fragment>;
};

export default GuestGuard;
