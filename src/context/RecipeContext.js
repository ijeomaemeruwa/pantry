import React, { createContext, useState } from 'react'
import uniqid from 'uniqid';

export const ReactContext = createContext();

const RecipeContextProvider = ({children}) => {
    const [recipes, setRecipes] = useState([]);

    const addRecipe = recipe => {
        setRecipes([ ...recipes, {...recipe, id: uniqid() }])
    };

    const deleteRecipe = id => {
        setRecipes(recipes.filter(recipe => recipe.id !== id));
    }

    return (
    <ReactContext.Provider value={{ recipes, addRecipe, deleteRecipe }}>
       {children}     
    </ReactContext.Provider>
    )
}

export default RecipeContextProvider;
