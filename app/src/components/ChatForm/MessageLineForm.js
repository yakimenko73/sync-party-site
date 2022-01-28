import React from "react";
import './ChatForm.css'

export default function MessageLineForm(props) {
  const authorIsUndefined = props.author === undefined
  return (
    <div className='message-line'>
      <span className='author' style={{color: props.color}}>{props.author}</span>
      <span className='separator'>{authorIsUndefined ? '' : ': '}</span>
      <span className='message' style={{color: authorIsUndefined ? 'rgba(255, 255, 255, 0.3)' : ''}}>{props.message}</span>
    </div>
  )
}