import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoomForm from "./components/RoomForm/RoomForm";
import HomeForm from "./components/HomeForm/HomeForm";
import ErrorForm from "./components/common/error/ErrorForm/ErrorForm";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeForm/>}/>
        <Route exact path="/rooms/:roomKey" element={<RoomForm/>}/>
        <Route path="*" element={<ErrorForm text={"Page not found :("}/>}/>
      </Routes>
    </BrowserRouter>
  )
}