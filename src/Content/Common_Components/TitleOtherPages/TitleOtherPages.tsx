import React from "react";
import styles from "./TitleOtherPages.module.css";
import { NavLink } from "react-router-dom";

interface TitleOtherPagesProps {
  page: string;
  welcome: string;
  path: string;
}

export function TitleOtherPages({ page, welcome, path }: TitleOtherPagesProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>{page}</h3>
        <p>{welcome}</p>
      </div>
      <div className={styles.path}>
        <p>
          <NavLink
            to="/"
          >
            <button className={styles.button}>
              <span className={styles.text}>Home</span>{" "}
            </button>
          </NavLink>
          <span className={styles.icon}>&gt;</span>{" "}
          <span className={styles.text}>{path}</span>
        </p>
      </div>
    </div>
  );
}
