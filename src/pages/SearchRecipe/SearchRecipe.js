import React, {useState } from 'react'
import '../SearchRecipe/searchrecipe.scss'

import Menu from '../../components/Menu/Menu'
import Search from './Search'
import DisplaySearch from '../SearchRecipe/DisplaySearch'


const SearchRecipe = () => {
    const [ getRecipe, setGetRecipe ] = useState([])


    // useEffect(() => {
    //   const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    //   axios.get(apiURL)
    //     .then(res => {
    //       setGetRecipe(res.data.meals);
    //     });
    // }, [searchTerm]);

     // const handleChange = (e) => {
    //   setSearchTerm(e.target.value)
    // };


    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   setGetRecipe(getRecipe)
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

   
    return (
    <>
    <Menu />
    <div className="search_recipe mx-auto">
    <Search fetchMeals={fetchMeals}/>
    </div> 
    <section className="container padding">
    <DisplaySearch getRecipe={getRecipe} />
    </section>   
    </>
    )
}

export default SearchRecipe
