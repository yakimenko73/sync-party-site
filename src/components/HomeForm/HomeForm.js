import React from "react";
import {useNavigate} from "react-router-dom";
import ButtonForm from "../common/ButtonForm/ButtonForm";
import axios from "axios";
import HeaderForm from "../HeaderForm/HeaderForm";
import "./HomeForm.css"

export default function HomeForm() {
  const navigate = useNavigate();
  const location = window.location;
  const toRoomForm = (room_key) => {
    navigate(`/rooms/${room_key}`)
  }

  return (
    <>
      <HeaderForm/>
      <main>
        <div className={"button-container"}>
          <ButtonForm text="Create a room" onClick={() => {
            axios.post(`${location.protocol}//${location.hostname}:8000/api/rooms/`)
              .then(res => {
                toRoomForm(res.data["key"])
              })
          }}/>
        </div>
      </main>
    </>
  )
}