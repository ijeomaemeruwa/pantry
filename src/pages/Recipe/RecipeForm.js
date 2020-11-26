import React from 'react'
import './recipe.scss'

import CustomButton from '../../components/CustomButton/CustomButton'

const RecipeForm = (props) => {
    return (
    <>
    <div className="search_recipe">
    <div className="text-center mx-auto search_content">
    <form onSubmit={props.fetchMeals}>
    <label htmlFor="name" className="label">
    Search for recipes from thousands of curated recipes:
    </label><br />
    <input className="search" type="text" 
    name="searchTerm" placeholder="enter search e.g brownie"
    />
    <CustomButton searchRecipe>SEARCH</CustomButton> 
    </form>    
    </div>
    </div> 
    </>
    )
}

export default RecipeForm
