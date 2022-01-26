import React from "react";
import './ChatForm.css'

export default function MessageLineForm(props) {
  return (
    <div className='message-line'>
      <span className='author' style={{color:props.color}}>{props.author}</span>
      <span className='separator'>: </span>
      <span className='message'>{props.message}</span>
    </div>
  )
}