import React, {Component} from 'react';

import axios from 'axios';

class ButtonForm extends Component {
    submitHandler = event => {
        axios.post(`http://0.0.0.0:1337/api/rooms/`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        event.preventDefault();
    };

    render() {
        return (
            <form className='button-form' onSubmit={this.submitHandler}>
                <button className='button' type='submit'>
                    Создать комнату
                </button>
            </form>
        );
    }
}

export default ButtonForm;