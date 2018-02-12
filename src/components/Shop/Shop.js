import React, { Component } from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';
import ShopItem from '../ShopItem/ShopItem';
import styles from './Shop.css';

import { getProducts } from '../../utils';

export default class Shop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }

  addToCart(product) {
    this.setState({
      cart: [...this.state.cart, product],
    });
  }

  renderProducts() {
    const products = getProducts();
    return products.map(product =>
      (<div className={styles.item} key={product.filename}>
        <img src={`../../assets/images/${product.filename}`} alt={`${product.name}`} />
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>{`$${(product.price / 100).toFixed(2)}`}</div>
        <Button onClick={() => this.addToCart(product)} >Add to cart</Button>
      </div>));
      // <ShopItem filename={product.filename} name={product.name} price={product.price} />
    // );
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
