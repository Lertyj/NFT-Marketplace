import React from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Content/Home/Home";

function App() {
  return (
    <div className={styles.app_wrapper}>
      <Router>
        <Header />
        <SideBar />
        <div className={styles.app_wrapper_content}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path='/bid' element={</>} />
            <Route exact path='/heart' element={</>} />
            <Route exact path='/collection' element={</>} />
            <Route exact path='/profile' element={</>} />
            <Route exact path='/setting' element={</>} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
