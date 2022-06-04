import React from 'react';
import './ButtonForm.css';


export default function ButtonForm(props) {
  return (
    <button className='button' type='submit' onClick={props.onClick}>{props.text}</button>
  );
}