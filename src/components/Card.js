import React, { Component } from 'react';
import styles from "./Card.module.css";

export class Card extends Component {

    render() {
    const {image,name,price} = this.props;
    return (
      <div className={styles.container}>
          <img src={image} alt=""/>
          <h3>{name}</h3>
          <p>{price}</p>
      </div>
    )
  }
}

export default Card;