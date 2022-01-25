import React from "react";
import {useNavigate} from "react-router-dom";
import ButtonForm from "../ButtonForm/ButtonForm";
import axios from "axios";

export default function HomeForm() {
  const navigate = useNavigate();
  return (
    <div className='app'>
      <header className='header'>
        <div className='container'>
          <div className='header-brand'>Title</div>
        </div>
      </header>
      <main className='main'>
        <ButtonForm onClick={() => {
          axios.post(`http://0.0.0.0:1337/api/rooms/`)
            .then(res => {
              console.log(res.data);
            })
          navigate('/rooms')
        }}/>
      </main>
    </div>
  )
}