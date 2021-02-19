import { connect } from "react-redux";
import Main from "./Main/Main";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";

import styles from "./app.module.scss";

function AppCont(props) {
  return (
    <div className={styles.container}>
      <Aside menuUI={props.menuUI} />
      <div className={styles.body}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

const mstp = (state) => ({
  menuUI: state.ui.menuUI,
});

export const App = connect(mstp, {})(AppCont);
