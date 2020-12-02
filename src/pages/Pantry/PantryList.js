
import React, {useEffect, useState} from 'react'
import './pantry.scss'
import { database } from '../../firebase/config'
import pantryImg from '../../assets/images/pantry.png'


import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'


const PantryList = () => {
    const [recipeDocs, setRecipeDocs] = useState([]);
    
    useEffect(() => {
        const unsubscribe = database.collection('pantry')
        .onSnapshot(snapshot => {
        const allRecipesInPantry = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
         setRecipeDocs(allRecipesInPantry)
        });
        return () => {
          unsubscribe();
        };
      },[]);
  
  
      const deleteRecipeCard = id => {
        database.collection('pantry')
        .doc(id)
        .delete();
      }

      // const updateRecipe = (key, data) => {
      //   return database.collection('pantry')
      //   .doc(key)
      //   .update(data);
      // };

      
      
    return (
    <>
      <div className="card_container container">
      {
        recipeDocs.map(recipe => (
        <Card key={recipe.id} style={{ width: '16rem' }} className="card"> 
        <Link to={{ pathname: `/pantrydetails/${recipe.id}`, state: { recipe: recipe.title } }}>
        <Card.Img variant="top" className="pantry_img" src={pantryImg} alt={recipe.title} />
        </Link>
         <Card.Body>
         <Card.Title><h5>{recipe.title}</h5></Card.Title>
         <Card.Text>
          <small>{recipe.category}</small>
         </Card.Text>
         <div className="card_btn">
        <button 
        onClick={() => deleteRecipeCard(recipe.id)}>
        <AiOutlineDelete />
        </button>
        <button><RiShareForwardLine /></button>
         </div>
        </Card.Body>
        </Card>
        ))
      }
    </div>       
    </>
    )

    }

export default PantryList
