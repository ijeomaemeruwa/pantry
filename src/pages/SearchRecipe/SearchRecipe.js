import React, {useState, useEffect } from 'react'
// import axios from 'axios'
import '../SearchRecipe/searchrecipe.scss'

import CustomButton from '../../components/CustomButton/CustomButton'
import Menu from '../../components/Menu/Menu'
import DisplaySearch from '../SearchRecipe/DisplaySearch'


const SearchRecipe = () => {

    const [ searchTerm, setSearchTerm ] = useState('')
    const [ getRecipe, setGetRecipe ] = useState([])
    // const [message, setMessage] = useState(null)
    //Loading


    // useEffect(() => {
    //   const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    //   axios.get(apiURL)
    //     .then(res => {
    //       setGetRecipe(res.data.meals);
    //     });
    // }, [searchTerm]);

    useEffect(() => {
      const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`

      async function fetchMeals() {
        const res = await fetch(apiURL)
        const data = await res.json()
        setGetRecipe(data.meals)
      }
      fetchMeals()
    }, [searchTerm])

   
    
    const handleChange = (e) => {
      setSearchTerm(e.target.value)
    };


    const handleSubmit = (e) => {
      e.preventDefault();
      setGetRecipe(getRecipe)
      setSearchTerm('')
    }

    return (
    <>
    <Menu />
    <div className="search_recipe">
    <div className="text-center search_content">

    <label htmlFor="name" className="label">
    Search for recipes from thousands of curated recipes:
    </label>
    <input 
    className="search"
    onChange={handleChange}
    value={searchTerm}
    name="searchTerm"
    type="text" 
    placeholder="enter keyword e.g brownie"
    /><br />

    <CustomButton 
    onClick={handleSubmit}
    searchRecipe >
      SEARCH  
    </CustomButton>     
    </div> 

    <div className="search_result mx-auto text-center">
        <section>
        <DisplaySearch recipes={getRecipe} />
        </section>
    </div>
    </div>      
    </>
    )
}

export default SearchRecipe
