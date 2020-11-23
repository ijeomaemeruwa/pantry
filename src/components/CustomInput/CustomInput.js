import React from 'react'
import '../CustomInput/custominput.scss'

const CustomInput = ({handleChange, ...otherInputProps}) => {
    return (
    <>
     <input 
      className="input"
      onChange={handleChange}
      {...otherInputProps}
      />        
    </>
    )
}

export default CustomInput
