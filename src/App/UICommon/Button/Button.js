import styles from "./button.module.scss";

export const Button = (props) => {
  const handleClick = props.handler ? props.handler : () => {};
  const btnCss = props.disabled
    ? `${styles.button} ${styles.disabled}`
    : props.clicked
    ? `${styles.button} ${styles.activated}`
    : styles.button;

  return (
    <button
      className={btnCss}
      style={{ width: props.width, height: props.height }}
      onClick={handleClick}
      disabled={props.disabled}
    >
      <p>{props.title}</p>
    </button>
  );
};
