import React, {useEffect, useRef, useState} from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import ChatForm from "../ChatForm/ChatForm";
import PlayerForm from "../PlayerForm/PlayerForm";
import './RoomForm.css'
import ChatMessageLineDto from "../../dto/ChatMessageLineDto";
import {useLocation} from "react-router";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function RoomForm() {
  const location = useLocation()
  const navigate = useNavigate()
  const [chatMessages, appendMessageLine] = useState([])
  const [viewers, increaseViewers] = useState(0)
  const ws = useRef(null)

  const openWSConnection = (room_key) => {
    ws.current = new WebSocket(`ws://${window.location.hostname}:8001/ws/chat/${room_key}`);

    ws.current.onopen = () => {
      console.debug("WS: Connection open")
      ws.current.send(JSON.stringify({
        data: {
          command: {
            text: 'Join'
          }
        },
      }))
    };

    ws.current.onclose = () => {
      console.debug("WS: Connection close")
    };

    ws.current.onmessage = e => {
      console.debug(`WS: Receive message ${e.data}`)

      let messageLine = new ChatMessageLineDto(JSON.parse(e.data).data.message)
      appendMessageLine(prevState => prevState.concat(messageLine))
    };
  }

  const handleJoinRoom = (room_key) => {
    axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/rooms/${room_key}/members/`)
      .then(res => {
        increaseViewers(prevState => prevState + res.data.length)
      })
      .catch(res => {
        if (res.response.status === 404)
          navigate('room-not-found')
      })
    openWSConnection(room_key)
  }

  useEffect(() => {
    document.cookie = "sessionid=xakmh2ffco0jss76287gyinm8sfaqqev"
    let room_key = location.pathname.split('/')[2] //FIXME find better solution

    handleJoinRoom(room_key)

    return () => {
      ws.current.close()
    }
  }, []);

  return (
    <>
      <HeaderForm/>
      <main className='main'>
        <ChatForm ws={ws} messages={chatMessages}/>
        <PlayerForm viewers={viewers}/>
      </main>
    </>
  )
}