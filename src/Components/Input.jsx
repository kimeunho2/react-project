import React from 'react'

const Input = ({type, placeholder, required, maxLength, onChange}) => {
  
  
  
  return (
    <input type={type} placeholder={placeholder} required={required} maxLength={maxLength} onChange={onChange} ></input>
  )
}

export default Input