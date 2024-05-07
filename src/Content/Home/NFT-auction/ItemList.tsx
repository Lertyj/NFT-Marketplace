import React from "react";
import { nftData } from "./nftData";
import {AuctionItem} from "./AuctionItem";
import styles from "./ItemList.module.css"

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