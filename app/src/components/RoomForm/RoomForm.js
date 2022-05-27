import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import ChatForm from "../ChatForm/ChatForm";
import PlayerForm from "../PlayerForm/PlayerForm";
import './RoomForm.css'
import ChatMessageLineDto from "../../dto/ChatMessageLineDto";
import {useLocation} from "react-router";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import RoomMemberDto from "../../dto/RoomMemberDto";
import retrieveRoomKey from "../../utils/utils";

export default function RoomForm() {
  const location = useLocation()
  const navigate = useNavigate()
  const [chatMessages, appendMessageLine] = useState([])
  const [roomMembers, appendMember] = useState([])
  const ws = useRef(null)
  const room_key = useMemo(() => retrieveRoomKey(location.pathname), [location])
  const wsCommands = useMemo(() => ({
    'Join': function (command) {
      let member = new RoomMemberDto({id: command.id})
      appendMember(prevState => prevState.concat(member).uniqueByField('id'))
    },
    'Left': function (command) {
      appendMember(prevState => prevState.filter(member => member.id !== command.id))
    }
  }), [roomMembers])

  const handleChatMessage = (message) => {
    let messageLine = new ChatMessageLineDto(message)
    appendMessageLine(prevState => prevState.concat(messageLine))
  }

  const openWsConnection = useCallback(() => {
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
        let payload = JSON.parse(e.data).data
        if (!payload)
          console.warn(`WS: Receive unexpected message ${JSON.stringify(payload)}`)
        let message = payload.message
        let command = payload.command
        if (message)
          handleChatMessage(message)
        if (command) {
          console.debug(`WS: Receive command: ${JSON.stringify(command)}`)
          wsCommands[command.text](command)
        }
      };
    }
    , [roomMembers])

  const handleJoinRoom = useCallback(() => {
    axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/rooms/${room_key}/members/`)
      .then(res => {
        let members = res.data.map(member => new RoomMemberDto(member))
        appendMember(prevState => prevState.concat(members))

        openWsConnection()
      })
      .catch(res => {
        if (res.response.status === 404)
          navigate('room-not-found')
      })
  }, [roomMembers])

  useEffect(() => {
    appendMember([])
    handleJoinRoom()

    return () => {
      ws.current.close()
    }
  }, []);

  return (
    <>
      <HeaderForm/>
      <main className='main'>
        <ChatForm ws={ws} messages={chatMessages}/>
        <PlayerForm viewers={roomMembers.length}/>
      </main>
    </>
  )
}