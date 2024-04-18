import React from "react";
import styles from "./TitleOtherPages.module.css";

export function TitleOtherPages({ page, welcome, path }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>{page}</h3>
        <p>{welcome}</p>
      </div>
      <div className={styles.path}>
        <p>
          <span className={styles.text}>Home</span>{" "}
          <span className={styles.icon}>&gt;</span>{" "}
          <span className={styles.text}>{path}</span>
        </p>
      </div>
    </div>
  );
}
