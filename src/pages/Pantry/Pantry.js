import React, {useState, useEffect} from 'react'
import { db } from '../../firebase/config'
import AddRecipe from '../../components/Modals/AddRecipeModal/AddRecipe'
import Menu from '../../components/Menu/Menu'

import Card from 'react-bootstrap/Card'
// import PantryDetails from '../../components/Modals/PantryDetails/PantryDetails';
import { GrAddCircle } from 'react-icons/gr'


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
    <div>
    <button  
    className="add_btn"
    onClick={() => setModalShow(true)}>
     Add Recipe <GrAddCircle/>
    </button> 
    <AddRecipe show={modalShow} onHide={() => setModalShow(false)} />

    <h4>Your Pantry</h4>
    <div className="card_container">
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
         <button>Icon</button>
         <button onClick={() => deleteRecipeCard.id}>Icon</button>
         </div>
        </Card.Body>
        </Card>
        ))
      }
    </div>
    </div>
    </div> 
    </>
    )
}

export default Pantry
