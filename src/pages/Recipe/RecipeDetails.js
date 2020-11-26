import React, { Component } from 'react'
import Menu from '../../components/Menu/Menu'
import ReactPlayer from 'react-player';


class RecipeDetails extends Component { 
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
    const { details } = this.state
    const ingredients = [];
    for(let i = 1; i <= 20; i++) {
       if(details[`strIngredient${i}`]) {
       ingredients.push(`${details[`strIngredient${i}`]} - ${details[`strMeasure${i}`]}`);
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
     <img className="recipe_image img-fluid" src={details.strMealThumb} alt={details.strMeal}/>
     </div>
     <div className="col-md-6">
     <h5>{details.strMeal}</h5>
     <h6>{details.strCategory}</h6>
     <h6>{details.strArea}</h6>
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

    <div className="procedure text-center">
    <div>
    <h4 className="procedure_title">Procedure</h4>
    </div>
    <p className="procedure_details">
    {details.strInstructions}
    </p>
    </div>
    {
        details.strYoutube ?
        <div className="video_container">
        <div className="text-center">
        <h4>Video Tutorial</h4>
        </div>
        <ReactPlayer url={details.strYoutube} className="video" />
        </div>
        : ''
    }
    </section>       
    </>
    )
}
}
  

export default RecipeDetails;
