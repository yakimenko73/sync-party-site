import React from "react";
import {useNavigate} from "react-router-dom";
import ButtonForm from "../common/ButtonForm/ButtonForm";
import axios from "axios";
import HeaderForm from "../HeaderForm/HeaderForm";

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
        <ButtonForm onClick={() => {
          if (location.hostname === "localhost1")
            toRoomForm("k1F09sl1")
          else
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