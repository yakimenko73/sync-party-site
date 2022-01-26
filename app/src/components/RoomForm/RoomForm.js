import React from "react";
import HeaderForm from "../HeaderForm/HeaderForm";
import ChatForm from "../ChatForm/ChatForm";
import PlayerForm from "../PlayerForm/PlayerForm";

export default function RoomForm() {
  return (
    <>
      <HeaderForm/>
      <main className='main'>
        <ChatForm/>
        <PlayerForm/>
      </main>
    </>
  )
}