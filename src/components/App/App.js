import React, { Component } from 'react';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';

export default class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Shop />

      </div>
    );
  }
}
