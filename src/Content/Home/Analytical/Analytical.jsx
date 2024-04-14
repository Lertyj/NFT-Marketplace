import React from "react";
import styles from "./Analytical.module.css";
import classes from "./Card.module.css";
import { CircleChart } from "./CircleChart";
import { GraphicChart } from "./Chart";
import "./chart.css";
import { cardData } from "./CardData";
export function Card({
  img,
  number,
  industry,
  percent,
  classnameimg,
  classnamep,
}) {
  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <div className={classes.information}>
          <div className={`${classes.img} ${classes[classnameimg]}`}>
            <img src={img} alt={industry} />
          </div>
          <div className={classes.text}>
            <h2>{number}</h2>
            <p>{industry}</p>
          </div>
        </div>
        <div className={`${classes.percent} ${classes[classnamep]}`}>
          <p>{percent}</p>
        </div>
      </div>
    </div>
  );
}

function Analytical() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.graphics}>
        <div className={styles.bids}>
          <h2 className={styles.title}>Trending Bids</h2>
          <div className={styles.cards}>
            {cardData.map((card, index) => (
              <li className={styles.item} key={index}>
                <Card key={index} {...card} />
              </li>
            ))}
          </div>
        </div>
        <div className={styles.price}>
          <h2 className={styles.title}>ETH Price</h2>
          <div className={styles.price_content}>
            <GraphicChart />
          </div>
        </div>
        <div className={styles.statistics}>
          <h2 className={styles.title}>Statistics</h2>
          <div className={styles.statistics_content}>
            <CircleChart />
            <div className={styles.data}>
              <p>
                <span className={styles.data_sold}></span>
                Artwork Sold
              </p>
              <p>
                <span className={styles.data_cancel}></span>
                Artwork CanCel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytical;
