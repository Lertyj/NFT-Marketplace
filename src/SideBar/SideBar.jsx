import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import DashBoardActiveIcon from "../icons/dashboard-active.svg";
import DashBoardInactiveIcon from "../icons/dashboard-inactive.svg";
import BidActiveIcon from "../icons/bid-active.svg";
import BidInactiveIcon from "../icons/bid-inactive.svg";
import HeartActiveIcon from "../icons/heart-active.svg";
import HeartInactiveIcon from "../icons/heart-inactive.svg";
import CollectionActiveIcon from "../icons/collection-active.svg";
import CollectionInactiveIcon from "../icons/collection-inactive.svg";
import ProfileActiveIcon from "../icons/profile-active.svg";
import ProfileInactiveIcon from "../icons/profile-inactive.svg";
import SettingActiveIcon from "../icons/setting-active.svg";
import SettingInactiveIcon from "../icons/setting-inactive.svg";
import SignOutIcon from "../icons/signout.svg";
import Logo from "../icons/logo.svg";
import styles from "./SideBar.module.css";

function SideBar() {
  const [activePage, setActivePage] = useState("");

  const handlePageChange = (page) => {
    setActivePage(page);
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.nav}>
        <nav>
          <div className={styles.item}>
            <img src={Logo} alt="Logo" />
          </div>
          <NavLink
            className={styles.item}
            to="/"
            onClick={() => handlePageChange("")}
          >
            {activePage === "" ? (
              <img src={DashBoardActiveIcon} alt="Dashboard Active" />
            ) : (
              <img src={DashBoardInactiveIcon} alt="Dashboard Inactive" />
            )}
          </NavLink>
          <NavLink
            className={styles.item}
            to="/bid"
            onClick={() => handlePageChange("bid")}
          >
            {activePage === "bid" ? (
              <img src={BidActiveIcon} alt="Bid Active" />
            ) : (
              <img src={BidInactiveIcon} alt="Bid Inactive" />
            )}
          </NavLink>
          <NavLink
            className={styles.item}
            to="/heart"
            onClick={() => handlePageChange("heart")}
          >
            {activePage === "heart" ? (
              <img src={HeartActiveIcon} alt="Heart Active" />
            ) : (
              <img src={HeartInactiveIcon} alt="Heart Inactive" />
            )}
          </NavLink>
          <NavLink
            className={styles.item}
            to="/collection"
            onClick={() => handlePageChange("collection")}
          >
            {activePage === "collection" ? (
              <img src={CollectionActiveIcon} alt="Collection Active" />
            ) : (
              <img src={CollectionInactiveIcon} alt="Collection Inactive" />
            )}
          </NavLink>
          <NavLink
            className={styles.item}
            to="/profile"
            onClick={() => handlePageChange("profile")}
          >
            {activePage === "profile" ? (
              <img src={ProfileActiveIcon} alt="Profile Active" />
            ) : (
              <img src={ProfileInactiveIcon} alt="Profile Inactive" />
            )}
          </NavLink>
          <NavLink
            className={styles.item}
            to="/setting"
            onClick={() => handlePageChange("setting")}
          >
            {activePage === "setting" ? (
              <img src={SettingActiveIcon} alt="Setting Active" />
            ) : (
              <img src={SettingInactiveIcon} alt="Setting Inactive" />
            )}
          </NavLink>
        </nav>
      </div>
      <div className={styles.item}>
        <img className={styles.sign_out} src={SignOutIcon} alt="Sign out" />
      </div>
    </div>
  );
}

export default SideBar;
