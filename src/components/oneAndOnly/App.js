import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor() {
    super()
  
    this.state = {
      users: [],
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({users: users}));
  }

  render() {
    return (
      <div>
        {this.state.users.map((user, index) => {
          return(
            <div key = {index}>
              <h1>{user.name}</h1>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
