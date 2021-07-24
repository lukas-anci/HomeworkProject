import React, { Component } from 'react';
class MyForm extends Component {
  state = {
    name: '',
    price: '',
    quantity: '',
    description: '',
    time: '',
    shopType: '',
  };
  render() {
    return (
      <div className="w-50">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Name"
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              name="price"
              placeholder="price"
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              name="quantity"
              placeholder="quantity"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              name="description"
              placeholder="description"
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              name="time"
              placeholder="time"
            />
          </div>

          <select name="shopType" className="custom-select">
            <option value="shop">Shop</option>
            <option value="service">Service</option>
          </select>

          <button type="submit" class="btn btn-primary my-4">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;
