import React, { Component } from 'react';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';
import { getProducts } from '../../utils';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      products: getProducts(),
      overlay: false,
    };

    this.toggleCart = this.toggleCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  toggleCart() {
    this.setState({
      overlay: !this.state.overlay,
    });
  }

  addToCart(product) {
    this.setState({
      cart: [...this.state.cart, product],
    });
  }

  removeFromCart(product) {
    const array = this.state.cart;
    const index = array.indexOf(product);
    array.splice(index, 1);
    this.setState({
      cart: array,
    });
  }

  render() {
    return (
      <div >
        {this.state.overlay &&
          <Cart
            selected={this.state.cart}
            remove={this.removeFromCart}
            back={this.toggleCart}
          />}
        <Header onClick={this.toggleCart} count={this.state.cart.length} />
        <Shop products={this.state.products} onClick={this.addToCart} />
      </div>
    );
  }
}
