import React from "react";
import styles from "./Analytical.module.css";
import wallet from "../../../icons/wallet.svg";
import art from "../../../icons/sheet.svg";
import classes from "./Card.module.css";
import { CircleChart } from "./CircleChart";
import { GraphicChart } from "./Chart";
import "./chart.css";
export function Card({ img, number, industry, percent, color, pColor }) {
  const imgStyle = {
    background: color,
  };
  const pStyle = {
    color: pColor,
  };
  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <div className={classes.information}>
          <div className={classes.img} style={imgStyle}>
            <img src={img} alt={industry} />
          </div>
          <div className={classes.text}>
            <h2>{number}</h2>
            <p>{industry}</p>
          </div>
        </div>
        <div className={classes.percent}>
          <p style={pStyle}>{percent}</p>
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
            <Card
              img={wallet}
              number="24K"
              industry="Artworks"
              percent="+168.001%"
              color="#6F4FF2"
              pColor="#50BB25"
            />
            <Card
              img={art}
              number="89"
              industry="Auction"
              percent="-168.001%"
              color="#DC3546"
              pColor="#DC3546"
            />
            <Card
              img={wallet}
              number="82K"
              industry="Creators"
              percent="+168.001%"
              color="#50BB25"
              pColor="#50BB25"
            />
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
