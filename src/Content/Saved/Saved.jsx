import React from "react";
import styles from "./Saved.module.css";
import { TitleOtherPages } from "../Common_Components/TitleOtherPages/TitleOtherPages";
import { ItemList } from "../Home/NFT-auction/NFT-auction";
function Saved() {
  return (
    <div className={styles.wrapper}>
      <TitleOtherPages
        page="Saved Items"
        welcome="Welcome Saved Page"
        path="Saved"
      />
      <div className={styles.collection}>
        <ItemList type="liked" />
      </div>
    </div>
  );
}

export default Saved;
