import React from 'react'
import '../container/App.scss'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import HomePage from '../pages/HomePage/HomePage'
import SearchRecipe from '../pages/SearchRecipe/SearchRecipe'
import Pantry from '../pages/Pantry/Pantry'
import SavedSearch from '../pages/SavedSearch/SavedSearch'
import DisplayRecipe from '../pages/SearchRecipe/DisplaySearch'

function App() {
  
  return (
    <>
    <Router>

    <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/homepage" component={HomePage} />
    <Route exact path="/searchrecipe" component={SearchRecipe} />
    <Route path="/displayrecipe/:id" component={DisplayRecipe} />
    <Route exact path="/pantry" component={Pantry} />
    <Route exact path="/savedsearch" component={SavedSearch} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
