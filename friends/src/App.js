import React from 'react';
import axios from 'axios';
import FriendForm from './components/friendForm';

import './App.css';
import { publicDecrypt } from 'crypto';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: [],
      error: ''
     }
    }

   componentDidMount(){
       axios 
       .get('http://localhost:5000/friends') //.get you'll receive or be able to read
       .then(response => this.setState({friends: response.data}))
       .catch(error => this.setState({ error: error}))
     }

  addFriend = (event, friend) => {
    event.preventDefault();
      axios 
      .post('http://localhost:5000/friends', friend) //.post adds
      .then(response => this.setState({ friends: response.data}))
      .catch(error => this.setState({error: error})) //might have to comeback to this
  }

updateFriend = (event, friend) => {
  event.preventDefault();
  axios
  .put(`http://localhost:500/friends/${friend.id}`, friend) //.put updates
  .then(response => this.setState({ friends: response.data}))
  .catch(error => this.setState({error: error}))
}

  render() { 
    return ( 
      <div className="App">
        <h1>Friends List</h1>
        <FriendForm addFriend={this.addFriend} updateFriend={this.updateFriend} />
        {this.state.friends.map(eachFriend => (
          <div key= { eachFriend.id }>
            {console.log(eachFriend)}
            <p>{eachFriend.name}</p>
            <p>{eachFriend.age}</p>
            <p>{eachFriend.email}</p>
            <button>Update</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
     );
  }
}
 


export default App;

