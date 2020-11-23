import React from 'react'
import Card from 'react-bootstrap/card'

const DisplaySearch = (props) => {
    return (
    <>
    <Card>
      {
        props.recipes.map((meal) => (
          <div key={meal.idMeal}>
            <h1>{meal.strMeal}</h1>
          </div>
        ))
      } 
    </Card>     
    </>
    )
}

export default DisplaySearch
