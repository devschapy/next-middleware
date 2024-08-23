'use client'
import React from 'react'
import { logout } from '@/actions/logout'

const DashboardCom = () => {
    // const handleClick = async () => {
    //     logout()
    // }
    return (
        <div>
            <div>
                <button onClick={() => logout()}>Logout</button>
            </div>
        </div>
    )
}

export default DashboardCom
