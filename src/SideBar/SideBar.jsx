import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as DashBoard } from "../icons/dashboard.svg";
import { ReactComponent as Bid } from "../icons/bid.svg";
import { ReactComponent as Heart } from "../icons/heart.svg";
import { ReactComponent as Collection } from "../icons/collection.svg";
import { ReactComponent as Profile } from "../icons/profile.svg";
import { ReactComponent as Setting } from "../icons/setting.svg";
import { ReactComponent as SignOut } from "../icons/signout.svg";
import Logo from "../icons/logo.svg";
import styles from "./SideBar.module.css";

function SideBar() {
  const [, setActivePage] = useState("");

  const handlePageChange = (page) => {
    setActivePage(page);
    localStorage.setItem("activePage", page);
  };
  useEffect(() => {
    const savedPage = localStorage.getItem("activePage");
    if (savedPage) {
      setActivePage(savedPage);
    }
  }, []);
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_wrapper}>
        <div className={styles.nav}>
          <nav>
            <div className={`${styles.item} ${styles.logo}`}>
              <img src={Logo} alt="Logo" />
            </div>
            <NavLink
              className={styles.item}
              to="/"
              onClick={() => handlePageChange("")}
            >
              <button>
                <DashBoard className="menu_item" />
              </button>
            </NavLink>
            <NavLink
              className={styles.item}
              to="/bid"
              onClick={() => handlePageChange("bid")}
            >
              <button>
                <Bid className="menu_item" />
              </button>
            </NavLink>
            <NavLink
              className={styles.item}
              to="/heart"
              onClick={() => handlePageChange("heart")}
            >
              <button className={styles.iconnn}>
                <Heart className="menu_item" />
              </button>
            </NavLink>
            <NavLink
              className={styles.item}
              to="/collection"
              onClick={() => handlePageChange("collection")}
            >
              <button>
                <Collection className="menu_item" />
              </button>
            </NavLink>
            <NavLink
              className={styles.item}
              to="/profile"
              onClick={() => handlePageChange("profile")}
            >
              <button>
                <Profile className="menu_item" />
              </button>
            </NavLink>
            <NavLink
              className={styles.item}
              to="/setting"
              onClick={() => handlePageChange("setting")}
            >
              <button>
                <Setting className="menu_item" />
              </button>
            </NavLink>
          </nav>
        </div>
        <div className={styles.item}>
          <button>
            <SignOut />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
