import React, { useState } from "react";
import styles from "./NFT-auction.module.css";
import { nftData } from "./nftData";
import ActionButton from "../../Common_Components/Buttons/ActionButton";
import RadioButtonsGroup from "./RadioButtonsGroup";

interface Item {
  value?: string;
  img: string;
  name: string;
  bid: string;
  currentBid: string;
  time: string;
}

const filterLogic: { [key: string]: (item: Item) => boolean } = {
  Book: (item) => item.value === "Book",
  ArtWork: (item) => item.value === "ArtWork",
  All: () => true,
};

function filterItems(items: Item[], statecard: string): Item[] {
  return items.filter((item) => {
    return (filterLogic[statecard] ? filterLogic[statecard](item) : true) && filterLogic["All"](item);
  });
}


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

interface ItemListProps {
  statecard: string;
  amount?: number;
}

export function ItemList({ statecard, amount }: ItemListProps) {
  return (
    <div className={styles.nft_auction}>
      {filterItems(nftData, statecard)
        .slice(0, amount ?? nftData.length)
        .map((item, index:number) => (
          <AuctionItem
            key={index}
            img={item.img}
            name={item.name}
            bid={item.bid}
            currentBid={item.currentBid}
            time={item.time}
          />
        ))}
    </div>
  );
}

interface NFTAuctionProps {
  title?: string;
}

function NFTAuction({ title }: NFTAuctionProps) {
  const [selectedOption, setSelectedOption] = useState("All");

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {title && title !== "" && (
          <div className={styles.title}>
            <h3>{title}</h3>
          </div>
        )}
        <div className={styles.select}>
          <RadioButtonsGroup
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>
      <ItemList statecard={selectedOption} amount={8} />
    </div>
  );
}

export default NFTAuction;