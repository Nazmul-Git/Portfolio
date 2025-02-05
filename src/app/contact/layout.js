import React from 'react'
import Nav from '../components/common/Nav'

export default function contactLayout({ children }) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}
