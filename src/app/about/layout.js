import React from 'react'
import Nav from '../components/common/Nav'

export default function aboutLayout({ children }) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}
