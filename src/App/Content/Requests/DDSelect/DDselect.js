import { useState, useEffect } from "react";
import { Field } from "react-final-form";
import arrow from "../../../../Assets/Icons/arrow.png";
import styles from "./ddselect.module.scss";

const FakeList = ({ options, fakeHandler, mode, setMode }) => {
  const setModeFalse = () => setMode(false);
  useEffect(() => {
    document.addEventListener("click", setModeFalse);
    return () => document.removeEventListener("click", setModeFalse);
  });

  return (
    <div className={styles.list}>
      {options.map((o) => (
        <button key={o.id} value={o.id} onClick={fakeHandler}>
          {o.name}
        </button>
      ))}
    </div>
  );
};

export const DDSelect = ({ name, selected, options, form, dotRgb }) => {
  const [dot, setDot] = useState("#ecf3f7");
  useEffect(() => dotRgb && setDot(dotRgb), [dotRgb]);

  const [mode, setMode] = useState(false);
  const modeHandler = () => setMode(!mode);

  const submitHandler = () => {
    const comment = form.getFieldState("comment").value;
    form.change("comment", undefined);
    form.submit();
    form.change("comment", comment);
  };

  const fakeHandler = async (e) => {
    e.preventDefault();
    await form.change(name, e.target.value);
    await submitHandler();
    modeHandler();
  };

  const arrowStyle = mode ? { transform: "rotate(180deg)" } : {};
  const displayStyle = mode ? { fontWeight: "800" } : {};

  return (
    <div className={styles.select}>
      {dotRgb && (
        <div className={styles.dot} style={{ backgroundColor: dot }}></div>
      )}

      <Field name={name} component="input" defaultValue={selected} />

      <div className={styles.display} onClick={modeHandler}>
        <p style={displayStyle}>
          {options.find((o) => o.id === selected).name}
        </p>
        <img src={arrow} alt="Выбрать" style={arrowStyle} />
      </div>

      {mode && (
        <FakeList
          options={options}
          fakeHandler={fakeHandler}
          mode={mode}
          setMode={setMode}
        />
      )}
    </div>
  );
};
