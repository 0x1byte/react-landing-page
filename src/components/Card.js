import React, { Component } from 'react';
import styles from "./Card.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg";

export class Card extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0,
    };
  }
  downHandler = () => {
    if(this.state.counter >= 1){
      this.setState(prevState =>({
        counter: prevState.counter - 1,
      }));
    }
  }
  upHandler = () => {
    this.setState(prevState =>({
      counter: prevState.counter + 1,
    }));
  }

    render() {
    const {image,name,price} = this.props;
    const {counter} = this.state;
    return (
      <div className={styles.container}>
          <img src={image} alt=""/>
          <h3>{name}</h3>
          <div className={styles.info}>
            <p>{price}</p>
            <div className={styles.counter}>
              <img className={this.state.counter ? "" : styles.deactive} src={down} alt="down arrow" onClick={this.downHandler}/>
              <span>{counter}</span>
              <img src={up} alt="up arrow" onClick={this.upHandler}/>
            </div>
          </div>
      </div>
    )
  }
}

export default Card;