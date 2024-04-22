import React from "react";
import styles from "./ProfileSetting.module.css";
import classes from "./Input.module.css";
import avatar from "../../../../icons/undefined-user.svg";
import inputData from "./inputData";
import ActionButton from "../../../Common_Components/Buttons/ActionButton";

function Input({ value, type }) {
  return (
    <div className={classes.wrapper}>
      <h5>{value}</h5>
      <input type={type} className={classes.input}></input>
    </div>
  );
}

function Welcome({ name, img }) {
  return (
    <div className={classes.container}>
      <span className={classes.img}>
        <img src={img} alt="avatar" />
      </span>
      <div className={classes.text}>
        <h5>{name}</h5>
        <p>Welcome Setting Page</p>
      </div>
    </div>
  );
}
function ProfileSetting() {
  return (
    <div className={styles.blocks}>
      <div className={styles.user_setting}>
        <div className={styles.user_profile_wrapper}>
          <h3 className={styles.title}>User Profile</h3>
          <div className={styles.user_profile}>
            <div className={styles.user_profile_container}>
              <Input value="Full Name" type="text" />
              <Welcome name="John Smith" img={avatar} />
              <ActionButton text="Save" classname="save" />
            </div>
          </div>
        </div>
        <div className={styles.update_profile_wrapper}>
          <h3 className={styles.title}>Update Profile</h3>
          <div className={styles.update_profile}>
            <div className={styles.update_profile_container}>
              <Input value="Email" type="email" />
              <Input value="Password" type="password" />
              <ActionButton text="Save" classname="save" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.personal_information_wrapper}>
        <h3 className={styles.title}>Personal Information</h3>
        <div className={styles.personal_information}>
          <div className={styles.personal_information_container}>
            <div className={styles.columns}>
              <div className={styles.column}>
                {Array(3)
                  .fill()
                  .map((_, index) => (
                    <Input
                      in
                      key={index}
                      {...inputData[index % inputData.length]}
                    />
                  ))}
              </div>
              <div className={styles.column}>
                {Array(3)
                  .fill()
                  .map((_, index) => (
                    <Input
                      in
                      key={index}
                      {...inputData[index % inputData.length]}
                    />
                  ))}
              </div>
            </div>
            <div className={styles.button}>
              <ActionButton text="Save" classname="save" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetting;
