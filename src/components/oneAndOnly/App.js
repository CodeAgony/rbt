import React, {Component} from 'react';
import './App.css';

class App extends Component {
// Fetch users on mount
 componentDidMount() {
    console.log("Mounted");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users));
  }

  render() {
    return (
      <div className="App">
        <h1 className="lol">Les do dis</h1>
      </div>
    );
  }
}

export default App;
