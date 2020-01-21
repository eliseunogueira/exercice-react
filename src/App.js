import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mosters: [
        {
          name: 'Frank',
          id: 1
        },
        {
          name: 'Dracula',
          id: 2
        },
        {
          name: 'Zombi',
          id: 3
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.mosters.map(moster => (
          <h1 key={moster.id}>{moster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
