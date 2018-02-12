import React, { Component } from 'react';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: false,
    };
  }

  render() {
    return (
      <div >
        <Header />
        {this.state.cart && <Cart />}
        <Shop />
      </div>
    );
  }
}
