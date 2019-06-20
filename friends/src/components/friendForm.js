import React, { Component } from 'react';

export default class FriendForm extends Component { 
constructor(props) {
    super(props);
    this.state ={
        friend: {
            name: '',
            age: '',
            email: '',
            id: 0
        },
        active: false
    }
}
    changeHandler = event => {
        event.persist();
        this.setState(prevState => ({ friend: {...prevState.friend, [event.target.name]: event.target.value}}) )
    }
    
    render() { 
        return ( 
        <div className='formContainer' >
            <form>
                <input type= 'text' placeholder='Name' required />
                <input type= 'number' placeholder='Age' required />
                <input type= 'email' placeholder='Email' required />
                <button>{`${this.state.active ? 'update' : `Add Friend`}`}</button>
            </form>
        </div> 
        );
    }
}
 
