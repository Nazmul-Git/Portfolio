import React from 'react'
import Nav from '../components/common/Nav'

export default function servicesLayout({ children }) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}
