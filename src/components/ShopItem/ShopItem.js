import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShopItem.css';

const ShopItem = ({ filename, price, name }) => (
  <div className={styles.container}>
    <img src={`../../assets/images/${filename}`} alt={`${name}`} />
    <div className={styles.name}>{name}</div>
    <div className={styles.price}>{`$${(price / 100).toFixed(2)}`}</div>
  </div>
);

ShopItem.propTypes = {
  filename: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
};

export default ShopItem;
