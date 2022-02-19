import React from 'react';
import styles from "./Logos.module.css";
import apple from "../images/apple.png";
import samsung from "../images/samsung.png";
import xiaomi from "../images/xiaomi.png";

const Logos = () => {
  return (
    <div className={styles.container}>
        <h3>Who Supports Us?</h3>
        <div>
            <img src={apple} alt="support-logo"/>
            <img src={samsung} alt="support-logo"/>
            <img src={xiaomi} alt="support-logo"/>
        </div>
    </div>
  )
}

export default Logos;