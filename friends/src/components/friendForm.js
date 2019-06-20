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

    submitHandler = (event, friend) => {
        if (this.state.active) {
            this.props.updateFriends(event, this.state.friend)
        }
        else {
            this.props.addFriend(event, this.state.friend)
        }
        this.setState({
            friend: {
                name: '',
                age: '',
                email: '',
              
            }, active: false
        })
    }
    
    render() { 
        return ( 
        <div className='formContainer' >
            <form onSubmit={this.submitHandler}>
                <input name="name" value={this.state.name} type= 'text' placeholder='Name' onChange={this.changeHandler} required />
                <input name="age" value={this.state.age} type='number' placeholder='Age' onChange={this.changeHandler} required />
                <input name="email" value={this.state.email} type= 'email' placeholder='Email' onChange={this.changeHandler} required />
                <button>{`${this.state.active ? 'update' : `Add Friend`}`}</button>
            </form>
        </div> 
        );
    }
}
 
