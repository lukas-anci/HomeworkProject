import './App.css';
import React, { Component } from 'react';
import MyForm from './components/MyForm';
import axios from 'axios';
import ShopList from './components/ShopList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: [],
    };
  }

  componentDidMount() {
    this.getAllItems();
  }

  createNewItem = async (data) => {
    console.log('data', data);
    try {
      const createResult = await axios.post(
        'http://localhost:4000/api/shop/new',
        data
      );
      console.log('createResult', createResult);
      return createResult.data ? true : false;
    } catch (error) {
      console.error(error);
    }
  };

  getAllItems = async () => {
    try {
      const allItems = await axios.get('http://localhost:4000/api/shop');
      if (Array.isArray(allItems.data) && allItems.data.length) {
        this.setState({ shop: allItems.data });
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <div className="App container">
        <MyForm onCreateItem={this.createNewItem} />
        <ShopList />
      </div>
    );
  }
}

export default App;
