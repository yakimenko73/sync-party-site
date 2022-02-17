import React, {useState} from "react";
import ChatLogForm from "./ChatLogForm";
import InputForm from "../common/InputForm/InputForm";
import './ChatForm.css'

export default function (props) {
  const [inputValue, setInputValue] = useState('');
  const chatInputMaxLength = 1000

  const handleChatKeyDown = (e) => {
    if (e.key === 'Enter') {
      let text = e.target.value.trim()
      if (text) {
        props.ws.current.send(JSON.stringify({
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

  return (
    <div className='chat-wrapper'>
      <ChatLogForm messages={props.messages}/>
      <InputForm value={inputValue}
                 onChange={handleUserInput}
                 onKeyDown={handleChatKeyDown}
                 placeholder={'Send a message'}
                 maxLength={chatInputMaxLength}/>
    </div>
  )
}