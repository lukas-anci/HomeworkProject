import React, { Component } from 'react';
import ShopItem from './ShopItem';
class ShopList extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default ShopList;
