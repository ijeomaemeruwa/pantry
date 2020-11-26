import React, { useState } from 'react'
import './recipe.scss'

import Nav from '../../components/Nav/Nav'
import RecipeForm from './RecipeForm'
import RecipeList from './RecipeList'


const SearchRecipe = () => {
    const [ getRecipe, setGetRecipe ] = useState([])


    const fetchMeals = async(e) => {
      e.preventDefault()
      const searchTerm = e.target.elements.searchTerm.value;
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const data = await res.json();
        setGetRecipe(data.meals)
  
      } catch(e) {
        console.log(e);
      }
      }

    return (
    <>
    <Nav />
    <RecipeForm fetchMeals={fetchMeals}/>
    <RecipeList getRecipe={getRecipe} />  
    </>
    )
}

export default SearchRecipe
