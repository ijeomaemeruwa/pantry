import React, { Component } from 'react'
import Menu from '../../components/Menu/Menu'
import ReactPlayer from 'react-player';

class DisplayRecipe extends Component {
    
    state = {
        details: []
    }

    componentDidMount = async() => {
        const recipe = this.props.location.state.displayrecipe;

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
        const data = await res.json();
        this.setState({ details: data.meals[0] })
    }


render() {
    const recipe = this.state.details;
    const ingredients = [];
    for(let i = 1; i <= 20; i++) {
       if(recipe[`strIngredient${i}`]) {
       ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
       } else {
        break;
    }
    }  


    return (
    <>
    <Menu />
    <section>
    <div className="recipe_header row">
     <div className="col-md-6">
     <img className="recipe_image img-fluid" src={recipe.strMealThumb} alt={recipe.strMeal}/>
     </div>
     <div className="col-md-6">
     <h5>{recipe.strMeal}</h5>
     <h6>{recipe.strCategory}</h6>
     <h6>{recipe.strArea}</h6>
     </div>
    </div>

    <div className="ingredients">
    <ul>
        {ingredients.map(ingredient => (
        <li key={ingredient}>
            {ingredient}
        </li>
        ))}
    </ul>
    </div> 

    <div className="instr text-center mt-4">
    <div>
    <h4 className="ingr-title">Procedure</h4>
    </div>
    <p className="instr-text text-justify">
        {recipe.strInstructions}
    </p>
    </div>
    {
        recipe.strYoutube ?
        <div className="video_container mt-4">
        <div className="text-center">
        <h4>Video Tutorial</h4>
        </div>
        <ReactPlayer url={recipe.strYoutube} className="video" />
        </div>
        : ''
    }
    </section>       
    </>
    )
}
}
  

export default DisplayRecipe;
