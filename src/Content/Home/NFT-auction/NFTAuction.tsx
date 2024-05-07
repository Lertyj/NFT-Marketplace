import React, { useState } from "react";
import styles from "./NFT-auction.module.css";
import RadioButtonsGroup from "./RadioButtonsGroup";
import {ItemList} from "./ItemList"


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