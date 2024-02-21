import React from "react";
import styles from "./Recent_Activity.module.css";
import classes from "./ActivityBlock.module.css";
import avatar from "../../../icons/avatar.svg";
function Activity({ avatar, nickname, event, time }) {
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
        <p>See more</p>
      </div>
      <div className={styles.block}>
        <div className={styles.content}>
          <ul>
            <li className={styles.item}>
              <Activity
                avatar={avatar}
                nickname="Papaya"
                event="Purchase by you for 0.05 ETH"
                time="12 mins ago"
              />
            </li>
            <li className={styles.item}>
              <Activity
                avatar={avatar}
                nickname="Papaya"
                event="0.06 ETH Received"
                time="12 mins ago"
              />
            </li>
            <li className={styles.item}>
              <Activity
                avatar={avatar}
                nickname="Papaya"
                event="Started Following you"
                time="12 mins ago"
              />
            </li>
            <li className={styles.item}>
              <Activity
                avatar={avatar}
                nickname="Papaya"
                event="Has been sold by 12.75 ETH"
                time="12 mins ago"
              />
            </li>
            <li>
              <Activity
                avatar={avatar}
                nickname="Papaya"
                event="Purchase by you for 0.05 ETH"
                time="12 mins ago"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
