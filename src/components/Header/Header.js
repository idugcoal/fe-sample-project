import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <ul className={style.header}>
        <li><span className='fas fa-shopping-cart' /></li>
        <li className={style.title}>Cart.ly</li>
        <li className={style.shop} onClick={this.props.onClick}>Shop</li>
        <li className={style.cart} onClick={this.props.onClick}>
          Your Cart
          <div className={style.counter}>{this.props.count}</div>
        </li>
      </ul>
    );
  }
}

Header.propTypes = {
  count: PropTypes.number,
};
