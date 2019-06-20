import React from 'react';
import axios from 'axios';
import FriendForm from './components/friendForm';

import './App.css';
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
       .get('http://localhost:5000/friends')
       .then(response => this.setState({friends: response.data}))
       .catch(error => this.setState({ error: error}))
     }

  

  render() { 
    return ( 
      <div className="App">
        <h1>Friends List</h1>
        <FriendForm />
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

