import './App.css';
import React, { Component } from 'react';
import MyForm from './components/MyForm';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: [],
    };
  }
  createNewItem = async (data) => {
    console.log('data', data);
    try {
      const createResult = await axios.post(
        'http://localhost:4000/api/shop/new',
        data
      );
      console.log('createResult', createResult);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="App container">
        <MyForm onCreateItem={this.createNewItem} />
      </div>
    );
  }
}

export default App;
