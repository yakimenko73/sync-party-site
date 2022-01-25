import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoomsForm from "./components/RoomsForm/RoomsForm";
import HomeForm from "./components/HomeForm/HomeForm";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeForm/>}/>
        <Route exact path="/rooms" element={<RoomsForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}