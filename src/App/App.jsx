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
    <div className={styles.app_container}>
      <div className={styles.app_wrapper}>
        <Router>
          <Header />
          <SideBar />
          <div className={styles.app_wrapper_content}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/bid" element={<Bid />} />
              <Route exact path="/heart" element={<Saved />} />
              <Route exact path="/collection" element={<Collection />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/setting" element={<Setting />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
