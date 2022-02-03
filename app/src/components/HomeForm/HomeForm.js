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
  const location = window.location;
  let config = {
    headers: {
      Session: "b4bxi0pb1smbsi9kwn3hzqcdxvmwsni5", //TODO: get from [POST /api/sessions] api
    }
  }

  return (
    <>
      <HeaderForm/>
      <main className='main'>
        <ButtonForm onClick={() => {
          axios.post(
            `${location.protocol}//${location.hostname}:8000/api/rooms/`,
            null, config)
            .then(res => {
              console.debug(res.data);
            })
          navigate(`/rooms/${RAW_ROOM.roomKey}`)
        }}/>
      </main>
    </>
  )
}