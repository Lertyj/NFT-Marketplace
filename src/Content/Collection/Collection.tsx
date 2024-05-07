import React from "react";
import styles from "./Collection.module.css";
import { TitleOtherPages } from "../Common_Components/TitleOtherPages/TitleOtherPages";
import NFTAuction from "../Home/NFT-auction/NFTAuction";
function Collection() {
  return (
    <div className={styles.wrapper}>
      <TitleOtherPages
        page="Collections"
        welcome="Welcome Collections Page"
        path="Collections"
      />
      <div className={styles.collection}>
        <NFTAuction />
      </div>
    </div>
  );
}

export default Collection;
