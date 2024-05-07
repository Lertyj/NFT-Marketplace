import React from "react";
import styles from "./Top_Creators.module.css";
import { creatorsData } from "./Top_CreatorData";
import { CreatorComponent } from "./CreatorComponent";

function TopCreators() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Top Creators</h3>
      </div>
      <div className={styles.content}>
        <ul>
          {creatorsData.map((creator, index) => (
            <li className={styles.item} key={index}>
              <CreatorComponent key={index} {...creator} />
            </li>
          ))}
        </ul>
        <ul>
          {creatorsData.map((creator, index) => (
            <li className={styles.item} key={index}>
              <CreatorComponent key={index} {...creator} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopCreators;
