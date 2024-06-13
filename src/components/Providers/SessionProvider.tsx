"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

interface SessionProvidersProps {
    children: ReactNode;
}

const SessionProviders: React.FC<SessionProvidersProps> = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default SessionProviders