import React, { Component } from 'react';

class friendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <form>
                <input type= 'text' placeholder='Name' required />
            </form>
        </div> );
    }
}
 
export default friendForm;