import React from "react";
import styles from "./Bid.module.css";
import ActiveBids from "../Home/Active_Bids/Active_Bids";
import ActionButton from "../Common_Components/Buttons/ActionButton";
import { TitleOtherPages } from "../Common_Components/TitleOtherPages/TitleOtherPages";
import { Card } from "../Home/Analytical/Analytical";
import { cardData } from "./Data/CardsData";
function Bid() {
  return (
    <div className={styles.wrapper}>
      <TitleOtherPages page="Bids" welcome="Welcome Bids Page" path="Bids" />
      <div className={styles.cards}>
        {cardData.map((card, index) => (
          <li className={styles.item} key={index}>
            <Card key={index} {...card} />
          </li>
        ))}
      </div>
      <ActiveBids button={<ActionButton text="Place a bid" />} />
    </div>
  );
}

export default Bid;
