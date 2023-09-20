import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type AuthState = {
    isAuthenticated: boolean;
};

/**
 * An auth provider to authenticate user
 */

const initialState: AuthState = {
    isAuthenticated: false,
};

export const AuthContext = createContext({
    ...initialState,
    login: (username: string) => {},
    logout: () => {},
});

export const AuthProvider = ({ children }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login: (username: string) => {
                    setIsAuthenticated(true);
                },
                logout: () => {
                    setIsAuthenticated(false);
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
