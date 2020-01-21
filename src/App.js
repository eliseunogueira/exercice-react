import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mosters: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ mosters: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList mosters={this.state.mosters} />
      </div>
    );
  }
}

export default App;
