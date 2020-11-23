import React from 'react'
import Modal from 'react-bootstrap/Modal'

const PantryModal = (props) => {
    return (
    <>
     <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
    <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
        {/* <Logo /> */}
    </Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-center modal_body">
  
    </Modal.Body>
    <Modal.Footer>
    
    </Modal.Footer>   
    </Modal>        
    </>
    )
}

export default PantryModal
