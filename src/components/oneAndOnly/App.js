import React from 'react';
import './App.css'
// Create new request
const dataRequest = new XMLHttpRequest(); 
dataRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
// Send request
dataRequest.send();
// Log response as parsed object
dataRequest.onload = function() {
  let response = JSON.parse(dataRequest.responseText);
console.log(response);
}


function App() {
  return (
    <div className="App">
      <h1 className="lol">Les do dis</h1>

    </div>
  );
}

export default App;
