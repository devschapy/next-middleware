'use client'
import React from 'react'
import { login } from '@/actions/login';

const LoginCom = () => {
    const handleClick = async () => {
        console.log('LoginCom')
        const loginRes = await login({
            password: 'maruf123',
            country_code: '+880',
            mobile_number: '1540348084'
        })

        console.log({ loginRes })
    }
    return (
        <div>
            <button onClick={() => handleClick()}>Login click</button>
        </div>
    )
}

export default LoginCom
