import React from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Content/Home/Home";
import Bid from "../Content/Bid/Bid";
import Saved from "../Content/Saved/Saved";
import Collection from "../Content/Collection/Collection";
import Profile from "../Content/Profile/Profile";
import Setting from "../Content/Setting/Setting";

function App() {
  return (
    <div className={`${styles.app_container} app`}>
      <div className={styles.app_wrapper}>
        <Router>
          <Header />
          <SideBar />
          <div className={styles.app_wrapper_content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bid" element={<Bid />} />
              <Route path="/heart" element={<Saved />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
