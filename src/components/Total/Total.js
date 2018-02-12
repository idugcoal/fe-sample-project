import React from 'react';
import PropTypes from 'prop-types';
import styles from './Total.css';

const Total = ({ total }) => (
  <div className={styles.container} >
    <div className={styles.title}>Total</div>
    <div className={styles.price}>{`$${total}`}</div>
  </div>
);

Total.propTypes = {
  total: PropTypes.string,
};

export default Total;
