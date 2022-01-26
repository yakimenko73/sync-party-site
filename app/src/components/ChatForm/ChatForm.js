import React, {useState} from "react";
import ChatLogForm from "./ChatLogForm";
import InputForm from "../common/InputForm/InputForm";
import './ChatForm.css'
import ChatMessageLineDto from '../../dto/ChatMessageLineDto'

const RAW_MESSAGE_LINE = {
  "author": 'John Doe',
  "color": "blue"
}

export default function () {
  const [messages, appendMessageLine] = useState([]);
  const handleChatKeyDown = (event) => {
    if (event.key === 'Enter') {
      RAW_MESSAGE_LINE.message = event.target.value
      let messageLine = new ChatMessageLineDto(RAW_MESSAGE_LINE)
      appendMessageLine(messages.concat(messageLine))
    }
  }

  return (
    <div className='chat-wrapper'>
      <ChatLogForm messages={messages}/>
      <InputForm onKeyDown={handleChatKeyDown}/>
    </div>
  )
}