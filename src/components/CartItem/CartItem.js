import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartItem.css';

const CartItem = ({ filename, price, name }) => (
  <div className={styles.container}>
    <img src={`../../assets/images/${filename}`} alt={`${name}`} />
    <div className={styles.name}>{name}</div>
    <div className={styles.price}>{`$${(price / 100).toFixed(2)}`}</div>
  </div>
);

CartItem.propTypes = {
  filename: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
};

export default CartItem;
