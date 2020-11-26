import React, {useState} from 'react'
import './recipe.scss'

import Nav from '../../components/Nav/Nav'
import RecipeForm from './RecipeForm'
import RecipeList from './RecipeList'


const SearchRecipe = () => {
    const [ getRecipe, setGetRecipe ] = useState([])

    // const [favorite, setFavorite] = useState([])

    // const [searchTerm, setSearchTerm] = useState('')
    // useEffect(() => {
    //   const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    //   const fetchMeals = async(e) => {
    //       e.preventDefault()
    //       try {
    //         const res = await fetch(apiURL)
    //         const data = await res.json();
    //         setGetRecipe(data.meals)
      
    //       } catch(e) {
    //         console.log(e);
    //       }
    //       }
    //       fetchMeals();
    // }, [searchTerm]);

    //  const handleChange = (e) => {
    //   setSearchTerm(e.target.value)
    // };


    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   fetchMeals()
    //   setSearchTerm('')
    // }


    const fetchMeals = async(e) => {
      e.preventDefault()
      const recipe = e.target.elements.searchTerm.value;
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
        const data = await res.json();
        setGetRecipe(data.meals)
  
      } catch(e) {
        console.log(e);
      }
      }


    // const addFavoriteRecipe = (recipe) => {
    //   const newRecipeList = [...favorite, recipe];
    //   setFavorite(newRecipeList);
    // } 

   
    return (
    <>
    <Nav />
    <RecipeForm fetchMeals={fetchMeals}/>
    <section className="container padding">
    <RecipeList 
    getRecipe={getRecipe} 
    />
    </section>   
    </>
    )
}

export default SearchRecipe
