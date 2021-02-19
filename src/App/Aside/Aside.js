import Logo from "../../Assets/Images/Logo.png";

import styles from "./aside.module.scss";

const Item = ({ title, icon }) => {
  return (
    <div className={styles.item}>
      <img src={icon} alt={title} />
      <p>{title}</p>
    </div>
  );
};

const Aside = ({ menuUI }) => {
  console.log(menuUI.map((el) => el));
  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>
        <img src={Logo} alt="Логотип" />
      </div>
      <div className={styles.menu}>
        {menuUI.map((item) => (
          <Item title={item.title} icon={item.icon} key={item.title} />
        ))}
      </div>
    </aside>
  );
};

export default Aside;
