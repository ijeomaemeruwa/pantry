import React, { useState, useEffect } from 'react';
import './recipe.scss';

import Nav from '../../components/Nav/Nav';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';


const SearchRecipe = () => {
    const [ getRecipe, setGetRecipe ] = useState([]);

    useEffect(() => {
      const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
      if (storedRecipes) setGetRecipe(storedRecipes);
    }, []);


    useEffect(() => {
      const recipes = JSON.stringify(getRecipe);
      localStorage.setItem('recipes', recipes)
    }, [getRecipe]);

     

    const fetchMeals = async(e) => {
      e.preventDefault()
      const searchTerm = e.target.elements.searchTerm.value;
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const data = await res.json();
        setGetRecipe(data.meals);
  
      } catch(error) {
        console.log(error);
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
