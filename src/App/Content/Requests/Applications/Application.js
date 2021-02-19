import styles from "./application.module.scss";

export const Application = (props) => {
  return (
    <div className={styles.application}>
      <div className={styles.priority}></div>
      <div className={styles.id}></div>
      <div className={styles.name}></div>
      <div className={styles.status}></div>
      <div className={styles.manager}></div>
    </div>
  );
};
