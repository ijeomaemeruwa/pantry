import React, { Component } from 'react'
import pantryImg from '../../assets/images/pantry.png'

import Nav from '../../components/Nav/Nav'

class PantryDetails extends Component {
    render() {
    return (
    <>
    <Nav /> 
    <section>
    <div>
    <img src={pantryImg} alt="pantry" />  
    </div>
    <div>
    
    </div>
    </section>    
    </>
    )
    }
}

export default PantryDetails;
