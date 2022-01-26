import React from 'react';
import './ButtonForm.css';


function ButtonForm(props) {
  return (
    <button className='button' type='submit' onClick={props.onClick}>Create room</button>
  );
}

export default ButtonForm;