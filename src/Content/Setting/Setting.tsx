import React from "react";
import styles from "./Setting.module.css";
import { TitleOtherPages } from "../Common_Components/TitleOtherPages/TitleOtherPages";
import { NavLink, Outlet } from "react-router-dom";
function Setting() {
  return (
    <div className={styles.wrapper}>
      <TitleOtherPages
        page="Setting"
        welcome="Welcome Setting Page"
        path="Setting"
      />
      <div className={styles.menu}>
        <NavLink className={styles.item} to="./profile">
          <button>
            <p>Profile</p>
          </button>
        </NavLink>
        <NavLink className={styles.item} to="./application">
          <button>
            <p>Application</p>
          </button>
        </NavLink>
        <NavLink className={styles.item} to="./security">
          <button>
            <p>Security</p>
          </button>
        </NavLink>
        <NavLink className={styles.item} to="./activity">
          <button>
            <p>Activity</p>
          </button>
        </NavLink>
        <NavLink className={styles.item} to="./payment">
          <button>
            <p>Payment Method</p>
          </button>
        </NavLink>
        <NavLink className={styles.item} to="./api">
          <button>
            <p>API</p>
          </button>
        </NavLink>
      </div>
      <div className={styles.page}>
        <Outlet/>
      </div>
    </div>
  );
}

export default Setting;
