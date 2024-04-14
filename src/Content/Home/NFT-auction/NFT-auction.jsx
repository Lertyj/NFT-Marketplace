import React from "react";
import styles from "./NFT-auction.module.css";
import { nftData } from "./nftData.jsx";
import ActionButton from "../../Common_Components/Buttons/ActionButton.jsx";
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
          <ActionButton text="Place a bid" />
        </div>
      </div>
    </div>
  );
}
function NFTAuction() {
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
        {nftData.length > 0 &&
          Array(8)
            .fill()
            .map((_, index) => (
              <AuctionItem key={index} {...nftData[index % nftData.length]} />
            ))}
      </div>
    </div>
  );
}

export default NFTAuction;
