import React from "react";
import './InputForm.css'

export default function InputForm(props) {
  return (
    <input type="text" className='input'
           value={props.value}
           onChange={props.onChange}
           onKeyDown={props.onKeyDown}
           placeholder={props.placeholder}
           maxLength={props.maxLength}/>
  )
}