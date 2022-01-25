import React from "react";
import {useNavigate} from "react-router-dom";
import ButtonForm from "../ButtonForm/ButtonForm";
import axios from "axios";
import HeaderForm from "../HeaderForm/HeaderForm";

export default function HomeForm() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderForm/>
      <main className='main'>
        <ButtonForm onClick={() => {
          axios.post(`http://0.0.0.0:1337/api/rooms/`)
            .then(res => {
              console.log(res.data);
            })
          navigate('/rooms')
        }}/>
      </main>
    </>
  )
}