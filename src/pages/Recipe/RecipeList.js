import React from 'react'
import './recipe.scss'

import Card from 'react-bootstrap/card'
import { Link } from 'react-router-dom'


const RecipeList = (props) => {
    return (
    <>
    <section className="container padding">
    <div className="search_result mx-auto text-center">
     {
       props.getRecipe.map(recipe => (
        <Card key={recipe.idMeal} className="recipe_card" style={{ width: '18rem', height: '100%' }}>
        <Link 
        to={{ pathname: `/recipedetails/${recipe.idMeal}`, 
        state: { recipe: recipe.strMeal } }}>
        <Card.Img variant="top" src={recipe.strMealThumb}  alt={recipe.idMeal} />
        </Link>
        <Card.Body className="text-left">
        <Card.Title>
          <h5>{recipe.strMeal.length < 15 ? `${recipe.strMeal}`:
           `${recipe.strMeal.substring(0, 20)}...`}</h5>
        </Card.Title>
        <Card.Text>
        <small>{recipe.strCategory}</small>
        </Card.Text>
        </Card.Body>
        </Card>
       ))} 
    </div> 
    </section>   
    </>
    )
}

export default RecipeList
