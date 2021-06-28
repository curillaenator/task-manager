import { FC, useEffect } from "react";
import { connect } from "react-redux";

import { AsideCont } from "./Aside/AsideCont";
import Header from "./Header/Header";
import Content from "./Content/Content";

import { setInitial } from "../Redux/reducers/tasksReducer";
import { TState } from "../Redux/store";

import styles from "./app.module.scss";

interface IApp {
  isInitialized: boolean;
  setInitial: () => void;
}

const AppCont: FC<IApp> = ({ isInitialized, setInitial }) => {
  useEffect(() => setInitial(), []);

  if (!isInitialized) {
    return (
      <div className={styles.container}>
        <h2 className={styles.loader}>Загрузка...</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <AsideCont />
      <div className={styles.content}>
        <Header />
        <Content />
      </div>
    </div>
  );
};

const mstp = (state: TState) => ({
  isInitialized: state.app.isInitialized,
});

export const App = connect(mstp, { setInitial })(AppCont);
