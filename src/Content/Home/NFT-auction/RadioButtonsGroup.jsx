import React from "react";
import styles from "./RadioButtonsGroup.module.css";

const RadioButton = ({ label, checked, onChange }) => (
  <label className={`${styles.label} ${checked ? styles.selected : ""}`}>
    <input
      className={styles.input}
      type="radio"
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);

const RadioButtonsGroup = ({ selectedOption, setSelectedOption }) => {
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.wrapper}>
      <RadioButton
        label="All"
        checked={selectedOption === "All"}
        onChange={() => handleOptionChange("All")}
      />
      <RadioButton
        label="ArtWork"
        checked={selectedOption === "ArtWork"}
        onChange={() => handleOptionChange("ArtWork")}
      />
      <RadioButton
        label="Book"
        checked={selectedOption === "Book"}
        onChange={() => handleOptionChange("Book")}
      />
    </div>
  );
};

export default RadioButtonsGroup;
