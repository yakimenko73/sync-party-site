import React from "react";
import {useNavigate} from "react-router-dom";
import ButtonForm from "../common/ButtonForm/ButtonForm";
import axios from "axios";
import HeaderForm from "../HeaderForm/HeaderForm";

export default function HomeForm() {
  const navigate = useNavigate();
  const location = window.location;
  const toRoomForm = (room_key) => {
    navigate(`/rooms/${room_key}`, {state: {}})
  }

  return (
    <>
      <HeaderForm/>
      <main>
        <ButtonForm onClick={() => {
          axios.post(`${location.protocol}//${location.hostname}:8000/api/rooms/`)
            .then(res => {
              console.debug(res.data);
              toRoomForm(res.data["key"])
            })
        }}/>
      </main>
    </>
  )
}