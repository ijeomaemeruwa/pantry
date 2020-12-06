import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import './homepage.scss';

import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Zoom from 'react-reveal/Zoom';

const HomePage = () => {

    return (
    <>
    <Nav />
    <section className="homepage text-center">
    <div className="homepage_content">
    <h3>What would you like to do?</h3>
    <Zoom>
    <CustomButton home_btn>
    <Link to="/pantry" className="link">Create Recipe</Link>
    </CustomButton>
    
    <CustomButton home_btn>
    <Link to="/recipe" className="link">Search Recipe</Link>
    </CustomButton>

    <CustomButton home_btn>
    <Link to="/automate" className="link">Automate Cabinet</Link>
    </CustomButton>
    </Zoom>
    </div>     
    </section>      
    </>
    )
}

export default HomePage
