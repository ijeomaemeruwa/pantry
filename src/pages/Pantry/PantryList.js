import React, {useEffect, useState} from 'react';
import './pantry.scss';
import { database } from '../../firebase/config';
import pantryImg from '../../assets/images/pantry.png';

import Card from 'react-bootstrap/Card';
import { AiOutlineDelete } from 'react-icons/ai';

// import { BiDish } from 'react-icons/bi'


const PantryList = () => {
    const [recipeDocs, setRecipeDocs] = useState([]);
    

    useEffect(() => {
        const unsubscribe = database.collection('pantryList')
        .onSnapshot(snapshot => {
        const pantry = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
         setRecipeDocs(pantry)
        });
        return () => {
          unsubscribe();
        };
      },[]);
  

      //Delete Recipe function
      const deleteRecipeCard = id => {
        database.collection('pantryList')
        .doc(id)
        .delete();
      };


  
    return (
    <>
    <section className="container">
      <div className="card_container mx-auto align-items-center">
      {
        recipeDocs.map(recipe => (
        <Card key={recipe.id} style={{ width: '16rem' }} className="card"> 
           <Card.Img variant="top" className="pantry_img" src={pantryImg} alt={recipe.title} />
           <Card.Body>
           <Card.Title>
             <h5>{recipe.title}</h5>
           </Card.Title>
           <Card.Text>
            <small>{recipe.category}</small>
           </Card.Text>

           <div className="delete_btn" onClick={() => deleteRecipeCard(recipe.id)}>
           <AiOutlineDelete />
           </div>

           </Card.Body>
        </Card>
        ))
      }
    </div> 
    </section>      
    </>
    );
    };

export default PantryList
