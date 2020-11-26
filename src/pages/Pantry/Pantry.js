import React, {useState} from 'react'
import './pantry.scss'

import PantryModal from '../../components/Modals/PantryModal/PantryModal'
import Nav from '../../components/Nav/Nav'
import PantryList from './PantryList'

import { GrAddCircle } from 'react-icons/gr'


const Pantry = () => {
    const [modalShow, setModalShow] = useState(false);
  
    return (
    <>
    <Nav />
    <div>
    <div className="pantry_header mx-auto text-center">
    <button className="add_btn" onClick={() => setModalShow(true)}>
     Add Recipe <GrAddCircle/>
    </button> 
    <PantryModal show={modalShow} onHide={() => setModalShow(false)} />
    {/* <h4>Your Pantry</h4> */}
    </div> 
    <PantryList />
    </div> 
    </>
    )
}

export default Pantry
