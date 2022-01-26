import React from "react";
import {Link} from "react-router-dom";

export default function HeaderForm() {
  return (
    <div className='app'>
      <header className='header'>
        <div className='container'>
          <div className='header-brand'>
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Sync-party</Link>
          </div>
        </div>
      </header>
    </div>
  )
}