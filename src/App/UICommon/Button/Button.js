import styles from "./button.module.scss";

export const Button = ({ title, width, height, handler, clicked }) => {
  const handleClick = handler ? handler : () => {};
  const btnCss = clicked
    ? `${styles.button} ${styles.activated}`
    : styles.button;
  return (
    <button className={btnCss} style={{ width, height }} onClick={handleClick}>
      <p>{title}</p>
    </button>
  );
};
