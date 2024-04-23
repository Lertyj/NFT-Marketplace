import React from "react";
import styles from "./Recent_Activity.module.css";
import classes from "./ActivityBlock.module.css";
import { recentData } from "./Recent_ActivityData";

interface ActivityProps{
  avatar:string,
  nickname:string,
  event:string,
  time:string;
}
function Activity({ avatar, nickname, event, time }:ActivityProps) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <img className={classes.img} src={avatar} alt="avatar" />
        <div className={classes.information}>
          <h4>{nickname}</h4>
          <p>{event}</p>
        </div>
      </div>
      <div className={classes.time}>
        <p>{time}</p>
      </div>
    </div>
  );
}

function RecentActivity() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Recent Activity</h3>
        <button> See more </button>
      </div>
      <div className={styles.block}>
        <div className={styles.content}>
          <ul>
            {recentData.map((recent, index:number) => (
              <li className={styles.item} key={index}>
                <Activity key={index} {...recent} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
