import React, { useState, useEffect } from "react";
import styles from "./Setting.module.css";
import { TitleOtherPages } from "../Common_Components/TitleOtherPages/TitleOtherPages";
import ProfileSetting from "./Tabs/ProfileSetting/ProfileSetting";
import ApplicationSetting from "./Tabs/ApplicationSetting/ApplicationSetting";
import SecuritySetting from "./Tabs/SecuritySetting/SecuritySetting";
import ActivitySetting from "./Tabs/ActivitySetting/ActivitySetting";
import PaymentMethodSetting from "./Tabs/PaymentMethodSetting/PaymentMethodSetting";
import APISetting from "./Tabs/APISetting/APISetting";

function Setting() {
  const tabs = {
    Profile: <ProfileSetting />,
    Application: <ApplicationSetting />,
    Security: <SecuritySetting />,
    Activity: <ActivitySetting />,
    "Payment Method": <PaymentMethodSetting />,
    API: <APISetting />,
  };

  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "Profile";
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className={styles.wrapper}>
      <TitleOtherPages
        page="Setting"
        welcome="Welcome Setting Page"
        path="Setting"
      />
      <div className={styles.menu}>
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={activeTab === tab ? styles.active : styles.inactive}
          >
            {tab}
          </button>
        ))}
      </div>
      {tabs[activeTab]}
    </div>
  );
}

export default Setting;
