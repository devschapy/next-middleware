import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            Dashboard Layout

            <hr />
            {children}
        </div>
    )
}

export default DashboardLayout
