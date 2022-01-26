import React, {useEffect, useRef} from "react";
import './ChatForm.css'
import MessageLineForm from "./MessageLineForm";

export default function ChatLogForm(props) {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
  }

  useEffect(() => {
    scrollToBottom()
  }, [props.messages]);

  return (
    <div className='chat-log'>
      {
        props.messages.map((message, index) =>
          <MessageLineForm author={message.author} message={message.message} color={message.color} key={index}/>)
      }
      <div ref={messagesEndRef}/>
    </div>
  )
}