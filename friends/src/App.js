import React from 'react';
import axios from 'axios';

import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: [],
      error: ''
     }

   componentDidMount(){
       axios 
       .get('http://localhost.5000/friends')
       .then(response => this.setState({friends: response.data}))
       .catch(error => this.setState({ error: error}))
     }

  }
  render() { 
    return ( 
      <div className="App">
        <h1>TEST</h1>
      </div>
     );
  }
}
 


export default App;

