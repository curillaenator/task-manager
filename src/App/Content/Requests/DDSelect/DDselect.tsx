import React, { useState, useEffect, FC } from "react";
import { Field } from "react-final-form";
import arrow from "../../../../Assets/Icons/arrow.png";
import styles from "./ddselect.module.scss";

interface IOptionList {
  isOpen: boolean;
  options: any[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectHandler: (e: React.SyntheticEvent) => void;
}

const OptionList: FC<IOptionList> = ({
  isOpen,
  options,
  selectHandler,
  setIsOpen,
}) => {
  const setModeFalse = () => setIsOpen(false);

  const handleOnClick = (e: React.SyntheticEvent) => {
    selectHandler(e);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("click", setModeFalse);
    return () => document.removeEventListener("click", setModeFalse);
  });

  return (
    <div className={styles.list}>
      {options.map((opt) => (
        <button key={opt.id} value={opt.id} onClick={handleOnClick}>
          {opt.name}
        </button>
      ))}
    </div>
  );
};

interface IDDSelect {
  name: string;
  selected: string;
  options: any[];
  dotRgb?: string;
  handleDropdown: (e: React.SyntheticEvent, name: string) => void;
}

export const DDSelect: FC<IDDSelect> = ({
  name,
  selected,
  options,
  dotRgb,
  handleDropdown,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.select}>
      {dotRgb && (
        <div className={styles.dot} style={{ backgroundColor: dotRgb }}></div>
      )}

      <Field name={name} component="input" defaultValue={selected} />

      <div className={styles.display} onClick={() => setIsOpen(!isOpen)}>
        <p>{options.find((opt) => opt.id === selected).name}</p>

        <img
          src={arrow}
          alt="Выбрать"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>

      {isOpen && (
        <OptionList
          isOpen={isOpen}
          options={options}
          selectHandler={(e: React.SyntheticEvent) => handleDropdown(e, name)}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};
