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

  componentDidMount() {
    this.props.shop && this.propsToState();
  }

  propsToState() {
    const { name, price, quantity, description, time, shopType } =
      this.props.shop;
    this.setState({ name, price, quantity, description, time, shopType });
  }

  clearInputs = () => {
    this.setState({
      name: '',
      price: '',
      quantity: '',
      description: '',
      time: '',
      shopType: '',
    });
  };

  handleSubmitLocal = async (e) => {
    e.preventDefault();
    console.log('stop');
    const { name, price, quantity, description, time, shopType } = this.state;

    const dataToCreate = { name, price, quantity, description, time, shopType };

    this.props.place && this.props.onEdit(dataToCreate);

    const success = await this.props.onCreateItem(dataToCreate);

    if (success) this.clearInputs();
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { state: s } = this;
    return (
      <div className={this.props.shop ? 'card-body ' : 'w-50'}>
        <form onSubmit={this.handleSubmitLocal} autoComplete="off">
          <div className="form-group">
            <input
              value={s.name}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              value={s.price}
              onChange={this.handleInput}
              type="number"
              className="form-control"
              name="price"
              placeholder="price"
            />
          </div>
          <div className="form-group">
            <input
              value={s.quantity}
              onChange={this.handleInput}
              type="number"
              className="form-control"
              name="quantity"
              placeholder="quantity"
            />
          </div>
          <div className="form-group">
            <input
              value={s.description}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="description"
              placeholder="description"
            />
          </div>
          <div className="form-group">
            <input
              value={s.time}
              onChange={this.handleInput}
              type="number"
              className="form-control"
              name="time"
              placeholder="time"
            />
          </div>

          <select
            value={s.shopType}
            onChange={this.handleInput}
            name="shopType"
            className="custom-select"
          >
            <option value="shop">Shop</option>
            <option value="service">Service</option>
          </select>

          <button type="submit" className="btn btn-primary my-4">
            {this.props.shop ? 'Save' : 'Submit'}
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;
