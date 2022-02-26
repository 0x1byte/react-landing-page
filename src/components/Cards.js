import React, { Component } from 'react';
import Card from './Card';
import styles from "./Cards.module.css";
import iphonex from "../images/iphonex.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import iphone13 from "../images/iphone13.jpg";

export class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Card image={iphonex} name="Iphone X" price="650 $" />
          <Card image={iphone11} name="Iphone 11" price="750 $" />
          <Card image={iphone12} name="Iphone 12" price="850 $" />
          <Card image={iphone13} name="Iphone 13" price="950 $" />
      </div>
    )
  }
}

export default Cards;