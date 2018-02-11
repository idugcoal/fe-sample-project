import React, { Component } from 'react';
import styles from './Title.css';

export default class Title extends Component {

  render() {
    console.log('testing')
    return (
      <h1 className={styles.title}>Shop our featured collection</h1>
    );
  }
}
