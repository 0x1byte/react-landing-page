import React, { Component } from 'react';
import Card from './Card';
import styles from "./Cards.module.css";
import iphonex from "../images/iphonex.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import iphone13 from "../images/iphone13.jpg";
import {v4} from "uuid";

export class Cards extends Component {
  constructor(){
    super();
    this.state = {
      phoneData:[
        {id:v4(),image:iphonex, name:"Iphone X" ,price:"650 $"},
        {id:v4(),image:iphone11, name:"Iphone 11" ,price:"750 $"},
        {id:v4(),image:iphone12, name:"Iphone 12" ,price:"850 $"},
        {id:v4(),image:iphone13, name:"Iphone 13" ,price:"950 $"}
      ]
    }
  }
  render() {
    return (
      <div className={styles.container}>
          {this.state.phoneData.map(phone => <Card key={phone.id} image={phone.image} name={phone.name} price={phone.price} />)}
      </div>
    )
  }
}

export default Cards;