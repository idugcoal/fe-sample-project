import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import Total from '../Total/Total';
import styles from './Cart.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.renderCartItems = this.renderCartItems.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal() {
    const total = this.props.selected.reduce((all, current) => all += current.price, 0);
    return (total / 100).toFixed(2);
  }

  renderCartItems() {
    if (this.props.selected.length === 0) {
      return (
        <div className={styles.empty}>
          Nothing in your cart,<br />start shopping
        </div>
      );
    }

    return this.props.selected.map((product, index) =>
      (<CartItem
        filename={product.filename}
        name={product.name}
        price={product.price}
        key={`${product.filename}-${index}`}
        onClick={this.props.remove}
      />));
  }

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.title}>Your cart</div>
          <div className={styles.cart_items}>
            {this.renderCartItems()}
          </div>
          <Total total={this.calculateTotal()} />
          <Button onClick={this.props.back}>Back</Button>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  selected: PropTypes.array,
  back: PropTypes.func,
  remove: PropTypes.func,
};
