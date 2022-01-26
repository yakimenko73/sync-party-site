import React from "react";
import './ChatForm.css'

export default function MessageLineForm(props) {
  return (
    <div className='message-line'>
      <span className='author'>{props.author}</span>
      <span className='separator'>: </span>
      <span className='message'>{props.message}</span>
    </div>
  )
}