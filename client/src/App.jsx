import './App.css';
import React, { Component } from 'react';
import MyForm from './components/MyForm';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: [],
    };
  }

  render() {
    return (
      <div className="App container">
        <MyForm />
      </div>
    );
  }
}

export default App;
