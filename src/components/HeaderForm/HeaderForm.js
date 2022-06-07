import React from "react";
import {Link} from "react-router-dom";
import "./HeaderForm.css"

export default function HeaderForm() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='brand'>
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Sync-party</Link>
        </div>
      </div>
    </header>
  )
}