import React from "react";
import {useNavigate} from "react-router-dom";
import ButtonForm from "../common/ButtonForm/ButtonForm";
import axios from "axios";
import HeaderForm from "../HeaderForm/HeaderForm";


export default function HomeForm() {
  const navigate = useNavigate();
  const location = window.location;

  return (
    <>
      <HeaderForm/>
      <main className='main'>
        <ButtonForm onClick={() => {
          axios.post(`${location.protocol}//${location.hostname}:8000/api/rooms/`)
            .then(res => {
              console.debug(res.data);
              navigate(`/rooms/${res.data["key"]}`)
            })
        }}/>
      </main>
    </>
  )
}