import React from "react";
import styles from "./Discover.module.css";
import ActionButton from "../../Common_Components/Buttons/ActionButton";
function Discover() {
  return (
    <div className={styles.discover}>
      <div className={styles.content}>
        <h2>Discover, Collect, Sell and Create your NFT</h2>
        <p>
          Digital marketplace for crypto collectibles and non fungable tokens
        </p>
        <div className={styles.buttons}>
          <ActionButton text="Explore" classname="twice_purple" />
          <ActionButton text="Create" classname="twice_red" />
        </div>
      </div>
    </div>
  );
}

export default Discover;
