import React from "react";
import styles from "./Card.module.css";
interface CardProps{
  img: string,
  name: string,
  avatar: string;
}
export function Card({ img, name, avatar }:CardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={img} alt="nft" className={styles.nft} />
          <img src={avatar} alt="avatar" className={styles.avatar} />
        </div>
        <h3>{name}</h3>
      </div>
    </div>
  );
}
