import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.renderCartItems = this.renderCartItems.bind(this);
  }

  renderCartItems() {
    return this.props.selected.map((product, index) =>
      (<CartItem
        filename={product.filename}
        name={product.name}
        price={product.price}
        key={`${product.filename}-${index}`}
        onClick={this.props.onClick}
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
          <Button onClick={() => this.props.onClick}>Back</Button>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  selected: PropTypes.array,
  onClick: PropTypes.func,
};
