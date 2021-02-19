import styles from "./button.module.scss";

export const Button = ({ title, width, height }) => {
  return (
    <button className={styles.button} style={{ width, height }}>
      <p>{title}</p>
    </button>
  );
};
