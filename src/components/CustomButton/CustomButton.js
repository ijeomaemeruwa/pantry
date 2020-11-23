import React from 'react'
import '../CustomButton/custombutton.scss'

const CustomButton = ({children, handleSubmit, home_btn, searchRecipe, ...otherProps}) => {
    return (
    <>
    <button 
     className={` 
     ${home_btn ? 'home_btn': ''}
     ${searchRecipe ? 'searchRecipe': ''}  
     custom_btn
    `} 
     {...otherProps}
     onSubmit={handleSubmit}
    >
     {children}    
    </button>       
    </>
    )
}

export default CustomButton
