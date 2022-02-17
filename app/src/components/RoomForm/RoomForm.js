import React, {useEffect, useRef, useState} from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import ChatForm from "../ChatForm/ChatForm";
import PlayerForm from "../PlayerForm/PlayerForm";
import './RoomForm.css'
import ChatMessageLineDto from "../../dto/ChatMessageLineDto";
import {useLocation} from "react-router";

export default function RoomForm() {
  const location = useLocation()
  const [chatMessages, appendMessageLine] = useState([])
  const ws = useRef(null)

  useEffect(() => {
    document.cookie = "sessionid=wxieje5ndhkffepcajepwz3y5m3alw4y"
    let room = location.pathname.split('/')[2] //FIXME find better solution

    ws.current = new WebSocket(`ws://${window.location.hostname}:8001/ws/chat/${room}`);

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
      console.debug(`WS: Receive message ${e.data.data}`)

      let messageLine = new ChatMessageLineDto(JSON.parse(e.data).data.message)
      appendMessageLine(prevState => prevState.concat(messageLine))
    };

    return () => {
      ws.current.close()
    }
  }, []);

  return (
    <>
      <HeaderForm/>
      <main className='main'>
        <ChatForm ws={ws} messages={chatMessages}/>
        <PlayerForm/>
      </main>
    </>
  )
}