import React, {useState} from "react";
import ChatLogForm from "./ChatLogForm";
import InputForm from "../common/InputForm/InputForm";
import './ChatForm.css'
import ChatMessageLineDto from '../../dto/ChatMessageLineDto'

const RAW_MESSAGE_LINE = {
  "author": 'John Doe',
}

export default function () {
  const [messages, appendMessageLine] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChatKeyDown = (e) => {
    if (e.key === 'Enter') {
      let text = e.target.value
      if (text) {
        RAW_MESSAGE_LINE.message = text
        let messageLine = new ChatMessageLineDto(RAW_MESSAGE_LINE)
        appendMessageLine(messages.concat(messageLine))

        resetInputField()
      }
    }
  }

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputField = () => {
    setInputValue('');
  };

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