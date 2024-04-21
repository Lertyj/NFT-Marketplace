import React from "react";
import styles from "./Authentication.module.css";
import mark from "../../../../icons/mark.svg";
import lock from "../../../../icons/lock.svg";

export function Authentication({ name, avatar }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.avatar}>
          <img src={avatar} alt="avatar" className={styles.avatar_img} />
        </span>
        <h3 className={styles.text}>Welcome, {name}</h3>
        <p className={styles.text}>
          Looks like you are not verified yet. Verify yourself to use the full
          potential of Xtrader.
        </p>
        <div className={styles.buttons}>
          <div className={styles.verify}>
            <button className={styles.button}>
              <span className={`${styles.verify_img} ${styles.img}`}>
                <img src={mark} alt="mark" />
              </span>
              <p>Verify account</p>
            </button>
          </div>
          <div className={styles.two_factor}>
            <button className={styles.button}>
              <span className={`${styles.two_factor_img} ${styles.img}`}>
                <img src={lock} alt="lock" />
              </span>
              <p>Two-factor Authentication ( 2FA )</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
