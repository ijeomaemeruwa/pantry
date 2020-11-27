import React, {useState} from 'react'
import './pantrymodal.scss'
import { db } from '../../../firebase/config'

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import CustomButton from '../../CustomButton/CustomButton'
import CustomInput from '../../CustomInput/CustomInput'
import Logo from '../../Logo/Logo'
import UploadImage from '../../UploadImage/UploadImage'


const PantryModal = (props) => {
  const [recipe, setRecipe] = useState({
    title: '',
    category: '',
    ingredients: '',
    procedure: ''
  });
 

  const handleChange = e => {
    const { name, value } = e.target;
    setRecipe({...recipe, [name]: value})
  };


  const handleSubmit = e => {
    e.preventDefault();
    db.collection('pantry').add(recipe)
    setRecipe({
      title: '',
      category: '',
      ingredients: '',
      procedure: ''
    })
  };



    return (
    <>
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
    <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter"><Logo /></Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-center modal_body">
    <h4>Create New Recipe</h4>

    <Form className="form" onSubmit={handleSubmit} >
    <Form.Group controlId="formBasicPassword">
    <Form.Label>Title</Form.Label>
    <CustomInput 
    type="text"
    placeholder="recipe name e.g banana bread"
    name="title"
    value={recipe.title}
    onChange={handleChange}
    required
    />
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
    <Form.Label>Category</Form.Label>
    <CustomInput 
    type="text"
    name="category"
    value={recipe.category}
    placeholder="recipe category e.g cocktail, bread"
    onChange={handleChange}
    required
    />
    </Form.Group>
    
    <Form.Group controlId="formBasicPassword">
    <Form.Label>Ingredients</Form.Label>
    <CustomInput 
    type="text"
    name="ingredients"
    value={recipe.ingredients}
    onChange={handleChange}
    required
    />
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
    <Form.Label>Procedure</Form.Label>
    <CustomInput 
    type="text"
    name="procedure"
    value={recipe.procedure}
    onChange={handleChange}
    required
    />
    </Form.Group>
    
    <UploadImage />
    
    <CustomButton type="submit" pantry_btn>
      Save
    </CustomButton>
    </Form>
    </Modal.Body>
    </Modal>       
    </>
    )
}

export default PantryModal
