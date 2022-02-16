import React, {useEffect, useRef, useState} from "react";
import ChatLogForm from "./ChatLogForm";
import InputForm from "../common/InputForm/InputForm";
import './ChatForm.css'
import ChatMessageLineDto from '../../dto/ChatMessageLineDto'
import {useLocation} from "react-router";

export default function () {
  const [messages, appendMessageLine] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const ws = useRef(null);
  const location = useLocation()
  const chatInputMaxLength = 1000

  const handleChatKeyDown = (e) => {
    if (e.key === 'Enter') {
      let text = e.target.value.trim()
      if (text) {
        ws.current.send(JSON.stringify({
          data: {
            message: {
              text: text.replace(/\s+/g, ' ')
            }
          },
        }))
      }
      resetInputField()
    }
  }

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputField = () => {
    setInputValue('');
  };

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
    <div className='chat-wrapper'>
      <ChatLogForm messages={messages}/>
      <InputForm value={inputValue}
                 onChange={handleUserInput}
                 onKeyDown={handleChatKeyDown}
                 placeholder={'Send a message'}
                 maxLength={chatInputMaxLength}/>
    </div>
  )
}