import React from 'react'
import './searchrecipe.scss'

import CustomButton from '../../components/CustomButton/CustomButton'

const Search = (props) => {
    return (
    <>
    <div className="text-center mx-auto search_content">
    <form onSubmit={props.fetchMeals}>
    <label htmlFor="name" className="label">
    Search for recipes from thousands of curated recipes:
    </label><br />
    <input 
    className="search"
    name="searchTerm"
    type="text" 
    placeholder="enter keyword e.g brownie"
    />
    <CustomButton searchRecipe >SEARCH</CustomButton> 
    </form>    
    </div>
      
    </>
    )
}

export default Search
