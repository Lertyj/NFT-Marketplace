import styles from "./ActionButton.module.css";
import React from "react";

interface ActionButtonProps {
  text: string,
  classname?: string;
}

function ActionButton({ text, classname }: ActionButtonProps) {
  return (
    <button type="button" className={styles.button + (classname ? ' ' + styles[classname] : '')}>
      {text}
    </button>
  );
}

export default ActionButton;
