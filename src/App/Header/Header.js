import Arturov from "../../Assets/Images/Arturov.jpg";

import styles from "./header.module.scss";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <input type="text" />
      </div>
      <div className={styles.avatar}>
        <p>Артуров Кирилл</p>
        <img src={Arturov} alt="Аватар" />
      </div>
    </header>
  );
};

export default Header;
