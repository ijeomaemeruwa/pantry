import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import './homepage.scss'

import { Link } from 'react-router-dom'
import Menu from '../../components/Menu/Menu'

const HomePage = () => {

    return (
    <>
    <Menu />
    <section className="homepage text-center">
    <div className="homepage_content">
    <h3>What would you like to do?</h3>
    <CustomButton home_btn>
    <Link to="/pantry" className="link">Create Recipe</Link>
    </CustomButton>
    
    <CustomButton home_btn>
    <Link to="/searchrecipe" className="link">Search Recipe</Link>
    </CustomButton>

    <CustomButton home_btn>
    <Link to="/automate" className="link">Automate Cabinet</Link>
    </CustomButton>
    </div>     
    </section>      
    </>
    )
}

export default HomePage
