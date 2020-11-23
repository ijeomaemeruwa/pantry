
import React from 'react'
import Logo from '../Logo/Logo'
import '../Menu/menu.scss'

import { Link } from 'react-router-dom'
// import { TiThMenu } from 'react-icons/ti'

const Menu = () => {
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
    <Link to="/savedsearch" className="nav_link">Saved Search</Link>
     </li>
    </ul>
    
    </div>     
    </nav>      
    </>
    )
}

export default Menu



