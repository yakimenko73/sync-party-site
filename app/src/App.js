import React from 'react';
import './App.css';
import ButtonForm from "./components/ButtonForm/ButtonForm";

function App() {
    return (
        <div className='app'>
            <header className='header'>
                <div className='container'>
                    <div className='header-brand'>Title</div>
                </div>
            </header>
            <main className='main'>
                <ButtonForm/>
            </main>
        </div>
    )
}

export default App;