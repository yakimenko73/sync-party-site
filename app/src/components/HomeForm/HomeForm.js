import React from "react";
import {useNavigate} from "react-router-dom";
import ButtonForm from "../common/ButtonForm/ButtonForm";
import axios from "axios";
import HeaderForm from "../HeaderForm/HeaderForm";

const RAW_ROOM = {
  "roomKey": "443d-2Sd-y",
  "host": "hostuser_key",
  "users": ["hostuser_key", "guestuser_key", "moderatoruser_key"]
}

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
          navigate(`/rooms/${RAW_ROOM.roomKey}`)
        }}/>
      </main>
    </>
  )
}