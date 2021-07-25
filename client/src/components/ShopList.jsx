import React, { Component } from 'react';
import ShopItem from './ShopItem';
class ShopList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Shop or Service list</h2>
        <div className="btn-group mb-3" role="group" aria-label="Basic example">
          <button
            onClick={() => this.props.onFilter()}
            type="button"
            className="btn btn-secondary"
          >
            All
          </button>
          <button
            onClick={() => this.props.onFilter('shop')}
            type="button"
            className="btn btn-secondary"
          >
            Shop only
          </button>
          <button
            onClick={() => this.props.onFilter('service')}
            type="button"
            className="btn btn-secondary"
          >
            Service Only
          </button>
        </div>
        <div className="d-flex flex-wrap">
          {this.props.shop.map((s) => (
            <ShopItem
              onEdit={this.props.onEdit}
              onDelete={this.props.onDelete}
              shop={s}
              key={s._id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ShopList;
