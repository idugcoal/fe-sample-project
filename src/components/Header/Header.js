import React, { Component } from 'react';
import style from './Header.css';

export default class Header extends Component {

  render() {
    return (
      <div className={style.header}>
        <span className='fas fa-shopping-cart' />
        <span className={style.title}>Cart.ly</span>
        <span className={style.shop}>Shop</span>
        <span className={style.cart}>Your Cart</span>
      </div>
    );
  }
}
