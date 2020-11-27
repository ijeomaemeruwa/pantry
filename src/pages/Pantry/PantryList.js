
import React from 'react'
import './pantry.scss'
//import { db } from '../../firebase/config'
// import CustomModal from '../../components/Modals/CustomModal/CustomModal'

import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
import useDatabase from '../../customHook/useDatabase'

const PantryList = () => {
    //const [recipeCard, setRecipeCard] = useState([]);
    const { docs } = useDatabase('pantry');

    // useEffect(() => {
    //     const unsubscribe = db.collection('pantry').onSnapshot(snapshot => {
    //     const allRecipes = snapshot.docs.map(doc => ({
    //       id: doc.id,
    //       ...doc.data()
    //     }));
    //      setRecipeCard(allRecipes)
    //     });
    //     return () => {
    //       console.log('cleanup');
    //       unsubscribe();
    //     };
    //   }, []);
  
  
      // const deleteRecipeCard = e => {
      //   // db.collection('pantry')
      //   // .doc(id)
      //   // .delete();

      //   if(e.target.tagName === 'svg'){
      //     const id = e.target.getAttribute('id');
      //     db.collection('pantry').doc(id).delete();
      // }
      // };
      
      
    return (
    <>
      <div className="card_container container">
      {
        docs && docs.map(recipe => (
        <Card key={recipe.id} style={{ width: '16rem' }} className="card"> 
    
        <Card.Img variant="top" src={recipe.url} alt={recipe.title} />
         <Card.Body>
         <Card.Title><h5>{recipe.title}</h5></Card.Title>
         <Card.Text>
          <small>{recipe.category}</small>
         </Card.Text>

         <Link to={{ pathname: `/pantrydetails/${recipe.id}`, state: { recipe: recipe.title } }}>View</Link>

         <div className="card_btn">
         <button><AiOutlineDelete /></button>
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
