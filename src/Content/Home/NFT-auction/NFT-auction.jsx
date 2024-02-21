import React from "react";
import styles from "./NFT-auction.module.css";
import nft from "../../../icons/nft.jpg";
export function AuctionItem({ img, name, bid, currentBid, time }) {
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
          <button className={styles.button}>Place a Bid</button>
        </div>
      </div>
    </div>
  );
}
function TrendingBidsCards() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Trending Bids</h3>
        <div className={styles.select}>
          <p className={`${styles.active} ${styles.item}`}>All</p>
          <p className={styles.item}>Artwork</p>
          <p className={styles.item}>Book</p>
        </div>
      </div>
      <div className={styles.nft_auction}>
        <AuctionItem
          img={nft}
          name="Liquid Wave"
          time="3h 1m 50s"
          bid="0.05 ETH"
          currentBid="0.15 ETH"
        />
        <AuctionItem
          img={nft}
          name="Liquid Wave"
          time="3h 1m 50s"
          bid="0.05 ETH"
          currentBid="0.15 ETH"
        />
        <AuctionItem
          img={nft}
          name="Liquid Wave"
          time="3h 1m 50s"
          bid="0.05 ETH"
          currentBid="0.15 ETH"
        />
        <AuctionItem
          img={nft}
          name="Liquid Wave"
          time="3h 1m 50s"
          bid="0.05 ETH"
          currentBid="0.15 ETH"
        />
        <AuctionItem
          img={nft}
          name="Liquid Wave"
          time="3h 1m 50s"
          bid="0.05 ETH"
          currentBid="0.15 ETH"
        />
        <AuctionItem
          img={nft}
          name="Liquid Wave"
          time="3h 1m 50s"
          bid="0.05 ETH"
          currentBid="0.15 ETH"
        />
        <AuctionItem
          img={nft}
          name="Liquid Wave"
          time="3h 1m 50s"
          bid="0.05 ETH"
          currentBid="0.15 ETH"
        />
        <AuctionItem
          img={nft}
          name="Liquid Wave"
          time="3h 1m 50s"
          bid="0.05 ETH"
          currentBid="0.15 ETH"
        />
      </div>
    </div>
  );
}

export default TrendingBidsCards;
