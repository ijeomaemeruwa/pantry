import React from 'react'
import '../CustomButton/custombutton.scss'

const CustomButton = ({children, home_btn, searchRecipe, ...otherProps}) => {
    return (
    <>
    <button 
     className={` 
     ${home_btn ? 'home_btn': ''}
     ${searchRecipe ? 'searchRecipe': ''}  
     custom_btn `} 
     {...otherProps}
    >
     {children}    
    </button>       
    </>
    )
}

export default CustomButton
