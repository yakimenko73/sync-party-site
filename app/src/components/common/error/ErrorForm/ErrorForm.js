import React from "react";
import {SiOdysee} from 'react-icons/si';
import './ErrorForm.css'

export default function ErrorForm(props) {
  return (
    <>
      <div className="container">
        <SiOdysee className={"astronaut"}/>
        <div className={"description"}>
          <h1>Houston we have a problem :/</h1>
          <div>{props.description}</div>
        </div>
      </div>
    </>
  )
}