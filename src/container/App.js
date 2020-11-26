import React from 'react'
import '../container/App.scss'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import HomePage from '../pages/HomePage/HomePage'
import RecipeDetails from '../pages/Recipe/RecipeDetails'
import Recipe from '../pages/Recipe/Recipe'
import Pantry from '../pages/Pantry/Pantry'
import PantryDetails from '../pages/Pantry/PantryDetails'
import Favorites from '../pages/Favorites/Favorites'


function App() {
  
  return (
    <>
    <Router>

    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/homepage" component={HomePage} />
    <Route exact path="/recipe" component={Recipe} />
    <Route path="/recipedetails/:id" component={RecipeDetails} />
    <Route exact path="/pantry" component={Pantry} />
    <Route path="/pantrydetails/:id" component={PantryDetails} />
    <Route exact path="/favorites" component={Favorites} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
