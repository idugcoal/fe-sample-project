import React, { Component } from 'react';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.renderCartItems = this.renderCartItems.bind(this);
  }

  renderCartItems() {
    return <CartItem />;
  }

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.title}>Your cart</div>
          <div className={styles.cart_items}>
            {this.renderCartItems()}
          </div>
          <Button>Back</Button>
        </div>
      </div>
    );
  }
}
