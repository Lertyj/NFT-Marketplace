import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as SearchImage } from "../icons/searchimage.svg";
import ProfileImage from "../icons/profile-icon.svg";
import { ReactComponent as BellImage } from "../icons/bellimage.svg";
import ThemeManager from "../ThemeManager/ThemeManager";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.search}>
          <form
            onClick={() => {
              return false;
            }}
            className={styles.form}
          >
            <button className={styles.button} type="button">
              <SearchImage className="svg" />
            </button>
            <input
              className={styles.input}
              type="text"
              placeholder="Search Here"
            />
          </form>
        </div>
        <div className={styles.buttons}>
          <ThemeManager />
          <button className={styles.bell}>
            <BellImage className="svg" />
          </button>
          <button className={styles.ProfileImage}>
            <img src={ProfileImage} alt="Profile icon" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
