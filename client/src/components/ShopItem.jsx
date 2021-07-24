import React, { Component } from 'react';
class ShopItem extends Component {
  state = {};
  render() {
    const { shop: s } = this.props;
    return (
      <div className="card m-2">
        <div className="card-header">Shop type: {s.shopType}</div>
        <div className="card-body">
          <h5 className="card-title">{s.name}</h5>
          <p className="card-text">Price:{s.price} </p>
          <p className="card-text">Quantity:{s.quantity} </p>
          <p className="card-text">Description:{s.description} </p>
          {s.time ? <p className="card-text">Time:{s.time} </p> : ''}
          {/* <p className="card-text">Time:{s.time} </p> */}
        </div>
        <div className="card-footer ">
          <button className="btn btn-success">Edit</button>
          <button
            onClick={() => this.props.onDelete(s._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default ShopItem;
