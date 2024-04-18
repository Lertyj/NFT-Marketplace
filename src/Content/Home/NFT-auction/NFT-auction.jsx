import React, { useState } from "react";
import styles from "./NFT-auction.module.css";
import { nftData } from "./nftData.jsx";
import ActionButton from "../../Common_Components/Buttons/ActionButton.jsx";
import RadioButtonsGroup from "./RadioButtonsGroup";

// let n = "All";
const filterLogic = {
  Book: (item) => item.type === "Book",
  ArtWork: (item) => item.type === "ArtWork",
  All: () => true,
};

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
  const [selectedOption, setSelectedOption] = useState("All");

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Trending Bids</h3>
        <div className={styles.select}>
          <RadioButtonsGroup
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>
      <div className={styles.nft_auction}>
        {nftData
          .filter(filterLogic[selectedOption] || filterLogic.All)
          .slice(0, 8)
          .map((item, index) => (
            <AuctionItem
              className={styles.auction_item}
              key={index}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default NFTAuction;
