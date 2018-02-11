import React, { Component } from 'react';
import Title from '../Title/Title';
import styles from './Shop.css';

export default class Shop extends Component {

  render() {
    return (
      <div className={styles.shop}>
        <Title />
        <div className={styles.container}>
          <div className={styles.item}>one</div>
          <div className={styles.item}>one</div>
          <div className={styles.item}>one</div>
          <div className={styles.item}>one</div>
          <div className={styles.item}>one</div>
          <div className={styles.item}>one</div>
          <div className={styles.item}>one</div>
          <div className={styles.item}>one</div>
          <div className={styles.item}>one</div>
          <div className={styles.item}>one</div>
          <div className={styles.item}>one</div>
          <div className={styles.item}>one</div>
        </div>
      </div>
    );
  }
}
