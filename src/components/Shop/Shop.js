import React, { Component } from 'react';
import Title from '../Title/Title';
import ShopItem from '../ShopItem/ShopItem';
import styles from './Shop.css';

// import { getProducts } from '../../utils';

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      products: this.props.products,
    };
    this.renderProducts = this.renderProducts.bind(this);
  }

  renderProducts() {
    return this.state.products.map(product =>
      (<ShopItem
        filename={product.filename}
        name={product.name}
        price={product.price}
        key={product.filename}
        onClick={this.props.onClick}
      />));
  }

  render() {
    return (
      <div className={styles.shop}>
        <Title />
        <div className={styles.container}>
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}
