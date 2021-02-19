import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Images/Logo.png";

import styles from "./aside.module.scss";

const Item = (props) => {
  const { title, path, icon } = props.item;
  return (
    <NavLink
      to={path}
      className={styles.item}
      activeClassName={styles.active}
    >
      <img src={icon} alt={title} />
      <p>{title}</p>
    </NavLink>
  );
};

const Aside = ({ menuUI }) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <img src={Logo} alt="Логотип" />
      </div>
      <div className={styles.menu}>
        {menuUI.map((item) => (
          <Item item={item} key={item.title} />
        ))}
      </div>
    </aside>
  );
};

export default Aside;
