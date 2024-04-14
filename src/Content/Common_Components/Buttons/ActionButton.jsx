import styles from "./ActionButton.module.css";
import React from "react";

function ActionButton({ text, classname }) {
  return (
    <button type="button" className={`${styles.button} ${styles[classname]}`}>
      {text}
    </button>
  );
}
export default ActionButton;
