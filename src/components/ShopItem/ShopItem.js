import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './ShopItem.css';

const ShopItem = ({ filename, price, name, onClick }) => (
  <div className={styles.item}>
    <img src={`../../assets/images/${filename}`} alt={`${name}`} />
    <div className={styles.name}>{name}</div>
    <div className={styles.price}>{`$${(price / 100).toFixed(2)}`}</div>
    <Button
      className={styles.button}
      onClick={() => onClick({ filename, price, name })}
    >
      Add to cart
    </Button>
  </div>
);

ShopItem.propTypes = {
  filename: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default ShopItem;
