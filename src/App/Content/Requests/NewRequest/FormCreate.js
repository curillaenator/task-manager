import { Field } from "react-final-form";
import styles from "./newRequest.module.scss";

const FormCreate = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.newRequest}>
      <div className={styles.formTitle}></div>
      <div className={styles.formBody}></div>
    </form>
  );
};
export default FormCreate;
