import React from 'react'
import Nav from '../components/common/Nav'

export default function worksLayout({ children }) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}
