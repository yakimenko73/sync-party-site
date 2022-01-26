import React from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import ChatForm from "../ChatForm/ChatForm";

export default function RoomForm() {
  return (
    <>
      <HeaderForm/>
      <main className='main'>
        <ChatForm/>
      </main>
    </>
  )
}