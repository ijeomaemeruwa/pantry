
import React from 'react'
import Logo from '../Logo/Logo'
import './nav.scss'

import { Link } from 'react-router-dom'

const Nav = () => {
    return (
    <>
    <nav className="nav">
    <div className="nav_content">
    <div className="nav_logo">
     <Logo />  
    </div>

    <ul className="nav_list">
     <li>
    <Link to="/pantry" className="nav_link">Pantry</Link>
     </li>
     <li>
    <Link to="/favorites" className="nav_link">Favorites</Link>
     </li>
    </ul>
    
    </div>     
    </nav>      
    </>
    )
}

export default Nav



