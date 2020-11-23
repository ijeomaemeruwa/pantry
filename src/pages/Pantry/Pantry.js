import React, {useState, useEffect} from 'react'
import './pantry.scss'
import { db } from '../../firebase/config'
import AddRecipe from '../../components/Modals/AddRecipeModal/AddRecipe'
import Menu from '../../components/Menu/Menu'

import Card from 'react-bootstrap/Card'
// import PantryDetails from '../../components/Modals/PantryDetails/PantryDetails';
import { GrAddCircle } from 'react-icons/gr'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'


const Pantry = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [recipeCard, setRecipeCard] = useState([]);

    useEffect(() => {
      const unsub = db.collection('pantry').onSnapshot(snapshot => {
      const allRecipes = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
       setRecipeCard(allRecipes)
      });
      return () => {
        console.log('cleanup');
        unsub();
      };
    }, []);


    const deleteRecipeCard = id => {
      db.collection('pantry')
      .doc(id)
      .delete();
    };


    return (
    <>
    <Menu />
    <div>

    <div className="pantry_header mx-auto text-center">
    <button  
    className="add_btn"
    onClick={() => setModalShow(true)}>
     Add Recipe <GrAddCircle/>
    </button> 
    <AddRecipe show={modalShow} onHide={() => setModalShow(false)} />
    {/* <h4>Your Pantry</h4> */}
    </div>

    <div className="card_container container">
    {/* Click on card to view recipe modal */}
      {
        recipeCard.map(recipe => (
        <Card key={recipe.id} style={{ width: '16rem' }}> 
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
         <Card.Title><h5>{recipe.title}</h5></Card.Title>
         <Card.Text>
          <small>{recipe.category}</small>
         </Card.Text>
         <div className="card_btn">
         <button onClick={() => deleteRecipeCard.id}><AiOutlineDelete /></button>
         <button><RiShareForwardLine /></button>
         </div>
        </Card.Body>
        </Card>
        ))
      }
    </div>
    </div> 
    </>
    )
}

export default Pantry
