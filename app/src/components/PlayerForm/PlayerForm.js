import React from "react";
import './PlayerForm.css'
import {AiOutlineUser} from 'react-icons/ai';

export default function PlayerForm(props) {
  return (
    <div className='player-wrapper'>
      <div className='player'>
        <h1 className='no-content'>No content</h1>
      </div>
      <div className={'info'}>
        <div className={'user-counter'}>
          <AiOutlineUser size={24}/>
          <div>{props.viewers}</div>
        </div>
      </div>
    </div>
  )
}