import React from 'react'
import '../UserAuthModal/userauthmodal.scss'

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'

import CustomButton from '../../CustomButton/CustomButton'
import CustomInput from '../../CustomInput/CustomInput'
import Logo from '../../Logo/Logo'

const UserAuthModal = (props) => {
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
          <Logo />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center modal_body">
        <h4>Create Pantry</h4>

        <Form>
        <Form.Group controlId="formBasicPassword">
        <Form.Label>UserName</Form.Label>
        <CustomInput 
        type="text"
        placeholder="Enter your name"
        required
        />
        </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
      <CustomButton create>
        <Link to="/homepage" className="link">
        CREATE PANTRY
        </Link>
      </CustomButton> 
      </Modal.Footer>
    </Modal>      
    </>
    )
}

export default UserAuthModal
