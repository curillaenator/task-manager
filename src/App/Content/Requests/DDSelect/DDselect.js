import { useState, useEffect } from "react";
import { Field } from "react-final-form";
import styles from "./ddselect.module.scss";

export const DDSelect = ({ selected, options, form, statusRgb }) => {
  const [dot, setDot] = useState("#ecf3f7");
  useEffect(() => statusRgb && setDot(statusRgb), [statusRgb]);

  const statusHandler = (e) => {
    const comment = form.getFieldState("comment").value;
    form.change("comment", undefined);
    form.submit();
    form.change("comment", comment);
    setDot(options.find((s) => s.id === +e.target.value).rgb);
  };

  return (
    <div className={styles.select}>
      {statusRgb && (
        <div className={styles.dot} style={{ backgroundColor: dot }}></div>
      )}
      
      <Field
        name="statusId"
        component="select"
        defaultValue={selected}
        onClick={statusHandler}
      >
        {options.map((s) => (
          <option value={s.id} key={s.id}>
            {s.name}
          </option>
        ))}
      </Field>
    </div>
  );
};
