import { FC } from "react";
import { Route } from "react-router-dom";
import { TasksCont } from "./Requests/Tasks";

interface ISimpleC {
  title: string;
}

const SimpleC: FC<ISimpleC> = ({ title }) => (
  <h2 style={{ margin: "40px", height: "705px" }}>{title}</h2>
);

const Content: FC = () => {
  return (
    <>
      <Route path="/" element={<TasksCont />} />
      <Route path="/requests" element={<TasksCont />} />
      <Route path="/knowledge" element={<SimpleC title="База знаний" />} />
      <Route path="/employees" element={<SimpleC title="Сотрудники" />} />
      <Route path="/clients" element={<SimpleC title="Клиенты" />} />
      <Route path="/assets" element={<SimpleC title="Активы" />} />
      <Route path="/settings" element={<SimpleC title="Настройки" />} />
    </>
  );
};

export default Content;
