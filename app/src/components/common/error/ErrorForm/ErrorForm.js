import React from "react";
import {SiOdysee} from 'react-icons/si';
import './ErrorForm.css'
import HeaderForm from "../../../HeaderForm/HeaderForm";

export default function ErrorForm(props) {
  return (
    <>
      <main>
        <HeaderForm/>
        <div className="error-container">
          <SiOdysee className={"astronaut"}/>
          <div className={"description"}>
            <h1>Houston we have a problem :/</h1>
            <div>Lol kek</div>
          </div>
        </div>
      </main>
    </>
  )
}