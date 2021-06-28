import { FC } from "react";
import Arturov from "../../Assets/Images/Arturov.jpg";
import search from "../../Assets/Icons/search.png";

import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <input type="text" />
        <img src={search} alt="Поиск" />
      </div>
      <div className={styles.avatar}>
        <p>Артуров Кирилл</p>
        <img src={Arturov} alt="Аватар" />
      </div>
    </header>
  );
};

export default Header;
