import { BrowserRouter } from "react-router-dom";
import { AsideCont } from "./Aside/AsideCont";
import Header from "./Header/Header";
import Content from "./Content/Content";

import styles from "./app.module.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <AsideCont />
        <div className={styles.content}>
          <Header />
          <Content />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
