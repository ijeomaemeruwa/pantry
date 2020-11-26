import React, { Component } from 'react'
import './recipe.scss'
import Nav from '../../components/Nav/Nav'
import ReactPlayer from 'react-player';


class RecipeDetails extends Component { 
    state = {
        details: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
        const apiData = await response.json();
        this.setState({ details: apiData.meals[0] })
    }

    // componentDidMount = () => {
    //     const json = localStorage.getItem("details");
    //     const meals = JSON.parse(json);
    //     this.setState({ details: meals });
    // }

    // componentDidUpdate = () => {
    //     const meals = JSON.stringify(this.state.details);
    //     localStorage.setItem("details", meals);
    // }


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
    <Nav />
    <section className="details_section">
    <h4>More Details for {details.strMeal}</h4>
    <div className="details_header row mx-auto text-center">
     <div className="col-md-6">
     <img className="details_image img-fluid" src={details.strMealThumb} alt={details.strMeal}/>
     </div>
     <div className="col-md-6 my-auto details_description text-left">
     <h5>Recipe: {details.strMeal}</h5>
     <h5>Category: {details.strCategory}</h5>
     <h5>Cuisine: {details.strArea}</h5>
     <h5>Tags: {details.strTags}</h5>
     </div>
    </div>

    <div className="ingredients">
    <h4>Ingredients</h4>
    <ul>
        {ingredients.map(ingredient => (
        <li key={ingredient}>
            {ingredient}
        </li>
        ))}
    </ul>
    </div> 

    <div className="procedure text-center mx-auto">
    <div>
    <h4 className="procedure_title">Procedure</h4>
    </div>
    <p className="procedure_details col-md-8">
    {details.strInstructions}
    </p>

    </div>
    {
        details.strYoutube ? (
        <div>
        <div className="text-center">
        <h4>Video Tutorial</h4>
        </div>
        <ReactPlayer url={details.strYoutube} className="video" />
        </div>
        ) : (
            <h5>No video available...</h5>
        )
    }
    </section>       
    </>
    )
}
}
  

export default RecipeDetails;
