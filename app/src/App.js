import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoomForm from "./components/RoomForm/RoomForm";
import HomeForm from "./components/HomeForm/HomeForm";
import NotFoundForm from "./components/NotFoundForm/NotFoundForm";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeForm/>}/>
        <Route exact path="/rooms/:roomKey" element={<RoomForm/>}/>
        <Route path="*" element={<NotFoundForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}