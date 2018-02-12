import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({ onClick, children }) => (
  <div onClick={onClick} className={styles.button}>
    {children}
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default Button;
