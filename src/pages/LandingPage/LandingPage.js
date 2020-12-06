import React from 'react';
import './landingpage.scss';
import foodimage from '../../assets/images/foodimg1.png';
// import { Link } from 'react-router-dom'

import CustomButton from '../../components/CustomButton/CustomButton';
import Logo from '../../components/Logo/Logo';
import UserAuthModal from '../../components/Modals/UserAuthModal/UserAuthModal';
import Image from 'react-bootstrap/Image';
import Fade from 'react-reveal/Fade';

const LandingPage = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
    <>
    <section className="landingpage">
    <nav className="nav_bar container">
    <div className="nav_items row">
    <Logo />

    {/* <CustomButton className="custom_btn">
    <Link to="/automate" className="link">AUTOMATE</Link>
    </CustomButton> */}
    </div>
    </nav>

    <div className="content row mx-auto">
    <div className="col-md-7 col-sm-10 my-3">
     <Image src={foodimage} alt="landing page" fluid />
    </div>

    <Fade>
    <div className="intro col-md-5 col-sm-10 my-3">
        <h1>Create, Search and Save.</h1> 
        <p>Have an idea of a recipe or cocktail mix in mind? Easily save them using pantry. Upload recipe details and
        save them for easy access.</p> 

        <CustomButton create  
        onClick={() => setModalShow(true)}
        >
        CREATE PANTRY
        </CustomButton> 

        <UserAuthModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
    </div> 
    </Fade>  
    </div>   
    </section>       
    </>
    )
}

export default LandingPage
