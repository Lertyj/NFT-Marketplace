import React from "react";
import styles from "./AuctionItem.module.css"
import ActionButton from "../../Common_Components/Buttons/ActionButton";

interface AuctionItemProps {
    img: string;
    name: string;
    bid: string;
    currentBid: string;
    time: string;
  }

export function AuctionItem({
  img,
  name,
  bid,
  currentBid,
  time,
}: AuctionItemProps) {
  return (
    <div className={styles.nft}>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src={img} alt={name} />
        </div>
        <div className={styles.text}>
          <h3>{name}</h3>
          <div className={styles.information}>
            <div className={styles.auction_time}>
              <p>Auction time</p>
              <p className={styles.time}>{time}</p>
            </div>
            <div className={styles.bid}>
              <p>Current Bid</p>
              <p className={styles.minimum_bid}>{bid}</p>
              <p className={styles.current_bid}>{currentBid}</p>
            </div>
          </div>
          <ActionButton text="Place a bid" />
        </div>
      </div>
    </div>
  );
}