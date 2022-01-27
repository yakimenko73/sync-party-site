import React, {useEffect, useRef, useState} from "react";
import ChatLogForm from "./ChatLogForm";
import InputForm from "../common/InputForm/InputForm";
import './ChatForm.css'
import ChatMessageLineDto from '../../dto/ChatMessageLineDto'

export default function () {
  const [messages, appendMessageLine] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const ws = useRef(null);

  const handleChatKeyDown = (e) => {
    if (e.key === 'Enter') {
      let text = e.target.value
      if (text) {
        ws.current.send(JSON.stringify({
          data: JSON.stringify({
            author: "John Doe",
            message: text
          }),
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
    ws.current = new WebSocket("ws://localhost:4000/ws/chat");
    ws.current.onopen = () => console.debug("WS: Connection open");
    ws.current.onclose = () => console.debug("WS: Connection close");

    ws.current.onmessage = e => {
      console.debug(`WS: Receive message ${e.data}`)

      let messageLine = new ChatMessageLineDto(JSON.parse(e.data))
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
                 placeholder={'Send a message'}/>
    </div>
  )
}