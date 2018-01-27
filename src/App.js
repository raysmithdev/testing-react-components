import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      name: 'ray'
    }
  }

  changeName(name) {
    this.setState({ name })
  }

  render() {
    return (
      <div className="App">
        <p className="author">{this.props.author}</p>
      </div>
    );
  }
}

export default App;
