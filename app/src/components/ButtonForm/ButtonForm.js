import React, {Component} from 'react';
import './ButtonForm.css';
import axios from 'axios';

class ButtonForm extends Component {
    submitHandler = event => {
        axios.post(`http://0.0.0.0:1337/api/rooms/`)
            .then(res => {
                console.log(res.data);
            })
        event.preventDefault();
    };

    render() {
        return (
            <form className='button-form' onSubmit={this.submitHandler}>
                <button className='button' type='submit'>Create room</button>
            </form>
        );
    }
}

export default ButtonForm;