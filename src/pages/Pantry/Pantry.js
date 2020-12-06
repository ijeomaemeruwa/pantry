import React, {useState} from 'react'
import './pantry.scss'

import PantryModal from '../../components/Modals/PantryModal/PantryModal'
import Nav from '../../components/Nav/Nav'
import PantryList from './PantryList'
import Zoom from 'react-reveal/Zoom'

const Pantry = () => {
    const [modalShow, setModalShow] = useState(false);
  
    return (
    <>
    <Nav />
    <div>
    <div className="pantry_header mx-auto text-center">
    <button className="add_btn" onClick={() => setModalShow(true)}>
     Add Recipe
    </button> 
    <PantryModal show={modalShow} onHide={() => setModalShow(false)} />
    </div> 
    <Zoom>
    <PantryList />
    </Zoom>
    </div> 
    </>
    )
}

export default Pantry
