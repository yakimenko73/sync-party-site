import React from "react";
import './ChatForm.css'
import MessageLineForm from "./MessageLineForm";

export default function ChatLogForm(props) {
  return (
    <div className='chat-log'>
      {
        props.messages.map((message, index) =>
          <MessageLineForm author={message.author} message={message.message} key={index}/>)
      }
      {/*<MessageLineForm author='John Doe' message='nice cock!'/>*/}
      {/*<MessageLineForm author='MeSSershcmitt' message='boy next door'/>*/}
      {/*<MessageLineForm author='undefined' message='holla'/>*/}
    </div>
  )
}