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
import ProfileSetting from "../Content/Setting/Tabs/ProfileSetting/ProfileSetting";
import ApplicationSetting from "../Content/Setting/Tabs/ApplicationSetting/ApplicationSetting";
import APISetting from "../Content/Setting/Tabs/APISetting/APISetting";
import PaymentMethodSetting from "../Content/Setting/Tabs/PaymentMethodSetting/PaymentMethodSetting";
import ActivitySetting from "../Content/Setting/Tabs/ActivitySetting/ActivitySetting";
import SecuritySetting from "../Content/Setting/Tabs/SecuritySetting/SecuritySetting";
import ThemeManager from "../ThemeManager/ThemeManager";
function App() {
  const themeManager = new ThemeManager();
  return (
    <div
      className={`${styles.app_container} app`}
      data-theme={themeManager.getCurrentTheme()}
    >
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
              <Route path="/setting" element={<Setting />}>
                <Route path="/setting/profile" element={<ProfileSetting />} />
                <Route
                  path="/setting/application"
                  element={<ApplicationSetting />}
                />
                <Route path="/setting/security" element={<SecuritySetting />} />
                <Route path="/setting/activity" element={<ActivitySetting />} />
                <Route
                  path="/setting/payment"
                  element={<PaymentMethodSetting />}
                />
                <Route path="/setting/api" element={<APISetting />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
