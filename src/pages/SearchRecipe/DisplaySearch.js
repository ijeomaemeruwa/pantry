import React from 'react'
import './searchrecipe.scss'

import Card from 'react-bootstrap/card'
import { VscHeart } from 'react-icons/vsc'
import { Link } from 'react-router-dom'


const DisplaySearch = (props) => {
    return (
    <>
    <div className="search_result mx-auto text-center">
     {
       props.getRecipe &&
       props.getRecipe.map(recipe => (
        <Card key={recipe.idMeal} style={{ width: '18rem', height: '100%' }} className="recipe_card">
        <Link to={{ pathname: `/displayrecipe/${recipe.idMeal}`,
        state: {displayrecipe: recipe.strMeal}
        }}>
        <Card.Img variant="top" src={recipe.strMealThumb}  alt={recipe.idMeal} />
        </Link>
        <Card.Body className="text-left">
        <Card.Title><h5>{recipe.strMeal}</h5></Card.Title>
        <Card.Text>
        <small>{recipe.strCategory}</small>
        </Card.Text>
        <div className="card_btn">
        <button><VscHeart /></button>
        </div>
        </Card.Body>
        </Card>
       ))} 
    </div>    
    </>
    )
}

export default DisplaySearch
