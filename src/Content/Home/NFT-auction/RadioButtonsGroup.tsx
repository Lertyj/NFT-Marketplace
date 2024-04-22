import React from "react";
import styles from "./RadioButtonsGroup.module.css";

interface RadioButtonProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const RadioButton = ({ label, checked, onChange }:RadioButtonProps) => (
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

interface RadioButtonsGroupProps {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const RadioButtonsGroup = ({ selectedOption, setSelectedOption }:RadioButtonsGroupProps) => {

  const handleOptionChange = (option: string) => {
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
