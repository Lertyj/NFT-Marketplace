import React from "react";
import styles from "./Top_Creators.module.css";
import classes from "./Creator_component.module.css";
import { creatorsData } from "./Top_CreatorData";
import ActionButton from "../../Common_Components/Buttons/ActionButton";

export function CreatorComponent({ avatar, nickname, projects, follow }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.content}>
          <img src={avatar} alt="avatar" />
          <div className={classes.information}>
            <h4>{nickname}</h4>
            <p>{projects}</p>
          </div>
        </div>
        <ActionButton text={follow} classname={follow} />
      </div>
    </div>
  );
}

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
