import React from 'react'
import '../LandingPage/landingpage.scss'
import foodimage from '../../assets/images/foodimg1.png'
import { Link } from 'react-router-dom'

import CustomButton from '../../components/CustomButton/CustomButton'
import Logo from '../../components/Logo/Logo'
import UserAuthModal from '../../components/Modals/UserAuthModal/UserAuthModal'

const LandingPage = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
    <>
    <section className="landingpage">
    <nav className="nav_bar container">
    <div className="nav_items row">
    <Logo />

    <CustomButton className="custom_btn">
    <Link to="/automate" className="link">AUTOMATE</Link>
    </CustomButton>
    </div>
    </nav>

    <div className="content row mx-auto">
    <div className="image col-md-6 my-5">
     <img src={foodimage} alt="landing page" />
    </div>

    <div className="intro col-md-6 my-5">
        <h1>Save, Search, Share and Automate.</h1> 
        <p>Have an idea of a recipe or cocktail mix in mind? Easily save them using pantry. Upload your images, recipe details and
        share them with friends on social media.</p> 

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
    </div>   
    </section>       
    </>
    )
}

export default LandingPage
