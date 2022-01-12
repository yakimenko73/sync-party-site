import React from 'react';
import './App.css';
import ButtonForm from "./components/ButtonForm/ButtonForm";


function App() {
    return (
        <div className='app'>
            <header className='header'>
                <div className='container'>
                    <div className='header-brand'>Sync-party</div>
                </div>
            </header>

            <main className='main'>
                <div className='about'>
                    <div className='about__bg'/>
                    <div className='container'>
                    </div>
                </div>
                <div>
                    <hr/>
                    <ButtonForm
                        onSubmit={() => this.closeForm()}
                    />
                </div>
            </main>
        </div>
    );
}

export default App;