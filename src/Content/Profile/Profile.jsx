import React from "react";
import styles from "./Profile.module.css";
import { TitleOtherPages } from "../Common_Components/TitleOtherPages/TitleOtherPages";
import { followingData } from "./FollowingData";
import { CreatorComponent } from "../Home/Top_Creators/Top_Creators";
import avatar from "../../icons/avatar.svg";
import { Authentication } from "./Components/Authentication/Authentication";
import { cardData } from "./Components/Card/cardData";
import { Card } from "./Components/Card/Card";
function Collection() {
  return (
    <div className={styles.wrapper}>
      <TitleOtherPages
        page="Profile"
        welcome="Welcome Profile Page"
        path="Profile"
      />
      <div className={styles.information}>
        <div className={styles.authentication}>
          <Authentication name="John Smith" avatar={avatar} />
        </div>
        <div className={styles.following}>
          <h3>Following</h3>
          <div className={styles.following_container}>
            <ul>
              {followingData.map((creator, index) => (
                <li className={styles.item} key={index}>
                  <CreatorComponent key={index} {...creator} />
                </li>
              ))}
            </ul>
            <ul>
              {followingData.map((creator, index) => (
                <li className={styles.item} key={index}>
                  <CreatorComponent key={index} {...creator} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bought}>
        <h3> My bought</h3>
        <div className={styles.cards}>
          {cardData.slice(0, 4).map((item, index) => (
            <Card className={styles.auction_item} key={index} {...item} />
          ))}
        </div>
      </div>
      <div className={styles.collection}>
        <h3> My Collections</h3>
        <div className={styles.cards}>
          {cardData.slice(0, 4).map((item, index) => (
            <Card className={styles.auction_item} key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
