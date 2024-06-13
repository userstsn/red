"use client"
import LoginForm from '@/components/Forms/LoginForm'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

const Login = () => {

    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

export default Login