import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as SearchImage } from "../icons/searchimage.svg";
import { ReactComponent as ProfileImage } from "../icons/profile-icon.svg";
import { ReactComponent as BellImage } from "../icons/bellimage.svg";
import Logo from "../icons/logo.svg";
import ThemeSelector from "../ThemeManager/ThemeSelector";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.search_logo}>
          <div className={styles.logo}>
            <img src={Logo} alt="logo" />
          </div>
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
        </div>

        <div className={styles.buttons}>
          <ThemeSelector />
          <button className={styles.bell}>
            <BellImage className="svg" />
          </button>
          <button className={styles.ProfileImage}>
            <ProfileImage />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
