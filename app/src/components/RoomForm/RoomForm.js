import React from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import './RoomForm.css';

export default function RoomForm() {
  return (
    <>
      <HeaderForm/>
      <main className='main'>
        <div className='chat-wrapper'>
          <div className='chat-log'>
            <div className='message-line'>
              <span className='author'>John Doe</span>
              <span className='separator'>: </span>
              <span className='message'>nice cock!</span>
            </div>
            <div className='message-line'>
              <span className='author'>MeSSershcmitt</span>
              <span className='separator'>: </span>
              <span className='message'>boy next door</span>
            </div>
            <div className='message-line'>
              <span className='author' style={{color: '#DC0880FF'}}>undefined</span>
              <span className='separator'>: </span>
              <span className='message'>holla</span>
            </div>
          </div>
          <div className='chat-input'>
            <input className='input-message'/>
          </div>
        </div>
      </main>
    </>
  )
}