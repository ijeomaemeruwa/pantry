import React from 'react'
import '../container/App.scss'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import HomePage from '../pages/HomePage/HomePage'
import RecipeList from '../pages/Recipe/RecipeList'
import Recipe from '../pages/Recipe/Recipe'
import Pantry from '../pages/Pantry/Pantry'
import Favorites from '../pages/Favorites/Favorites'


function App() {
  
  return (
    <>
    <Router>

    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/homepage" component={HomePage} />
    <Route exact path="/recipe" component={Recipe} />
    <Route path="/recipelist/:id" component={RecipeList} />
    <Route exact path="/pantry" component={Pantry} />
    <Route exact path="/favorites" component={Favorites} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
