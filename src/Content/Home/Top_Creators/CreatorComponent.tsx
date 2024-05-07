import React from "react";
import ActionButton from "../../Common_Components/Buttons/ActionButton";
import classes from "./Creator_component.module.css";

interface CreatorComponentProps{
  avatar:string,
  nickname:string,
  projects:string,
  follow:string;
}
export function CreatorComponent({ avatar, nickname, projects, follow }:CreatorComponentProps) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.content}>
          <img src={avatar} alt="avatar" />
          <div className={classes.information}>
            <h4>{nickname}</h4>
            <p>{projects}</p>
          </div>
        </div>
        <ActionButton text={follow} classname={follow} />
      </div>
    </div>
  );
}