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
      this.getAllItems();
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

  deleteItem = async (id) => {
    console.log('you want to delete', id);
    try {
      const deleteItem = await axios.delete(
        'http://localhost:4000/api/shop/delete/' + id
      );

      deleteItem.data && this.getAllItems();
    } catch (error) {
      console.error(error);
    }
  };

  editItem = async (id, editDetails) => {
    console.log('update place', id, editDetails);

    try {
      const updateResult = await axios.put(
        'http://localhost:4000/api/shop/edit/' + id,
        editDetails
      );
      if (updateResult.data) this.getAllItems();
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="App container">
        <MyForm onCreateItem={this.createNewItem} />
        <ShopList
          onEdit={this.editItem}
          onDelete={this.deleteItem}
          shop={this.state.shop}
        />
      </div>
    );
  }
}

export default App;
