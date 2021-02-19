import { Route } from "react-router-dom";
import { RequestsCont } from "./Requests/Requests";

const SimpleC = (props) => <h2 style={{ margin: "40px" }}>{props.title}</h2>;

const Content = () => {
  return (
    <>
      <Route path="/requests" render={() => <RequestsCont />} />
      <Route path="/knowledge" render={() => <SimpleC title="База знаний" />} />
      <Route path="/employees" render={() => <SimpleC title="Сотрудники" />} />
      <Route path="/clients" render={() => <SimpleC title="Клиенты" />} />
      <Route path="/assets" render={() => <SimpleC title="Активы" />} />
      <Route path="/settings" render={() => <SimpleC title="Настройки" />} />
    </>
  );
};

export default Content;
