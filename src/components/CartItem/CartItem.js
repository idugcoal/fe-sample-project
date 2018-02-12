import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './CartItem.css';

const CartItem = ({ filename, price, name, onClick }) => (
  <div className={styles.cart_item} key={filename}>
    <img src={`../../assets/images/${filename}`} alt={`${name}`} />
    <div className={styles.name}>{name}</div>
    <div className={styles.price}>{`$${(price / 100).toFixed(2)}`}</div>
    <div className={styles.remove} onClick={() => onClick({ filename, price, name })} />
  </div>
);

CartItem.propTypes = {
  filename: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default CartItem;
