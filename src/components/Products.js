import React, { Component } from 'react';
import styles from "./Products.module.css"
import Card from './Card';
import axios from 'axios';

export class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products/")
    .then((response) => this.setState({products: response.data}))
  }
  render() {
    const { products } = this.state;
    return (
      <div className={styles.container}>
        {
        products.length ? 
        products.map(product => <Card key={product.id} image={product.image} name={product.title} price={`${product.price} $`} />): <h1>Loading...</h1>
      }
      </div>
    )
  }
}

export default Products;