import { Field } from "react-final-form";
import { Button } from "../../../UICommon/Button/Button";
import close from "../../../../Assets/Icons/close.png";
import styles from "./newtask.module.scss";

const required = (value) => (value ? undefined : "Обязательное поле");

const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.textarea}>
      <textarea {...input} {...props}></textarea>
      {hasError && <p>{"* " + meta.error}</p>}
    </div>
  );
};

const FormCreate = ({ toggleCreateForm, handleSubmit, values, form }) => {
  const submit = (e) => {
    e.preventDefault();
    values.name && values.description && toggleCreateForm();
    form.submit();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.newTask}>
      <div className={styles.formTitle}>
        <h2>Новая заявка</h2>
        <img src={close} alt="Закрыть" onClick={toggleCreateForm} />
      </div>

      <div className={styles.formBody}>
        <div className={styles.name}>
          <p>Название</p>
          <Field name="name" component={Textarea} validate={required} />
        </div>

        <div className={styles.description}>
          <p>Описание</p>
          <Field name="description" component={Textarea} validate={required} />
        </div>

        <div className={styles.save}>
          <Button
            title="Сохранить"
            width="150px"
            height="35px"
            handler={submit}
          />
        </div>
      </div>
    </form>
  );
};
export default FormCreate;
