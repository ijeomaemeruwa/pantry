import React from 'react'
import '../Logo/logo.scss'

import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <>
        <Link to="/homepage" className="logo">
            PANTRY
        </Link>   
        </>
    )
}

export default Logo
