import { useState, useEffect } from "react";
import { connect } from "react-redux";
import NewTask from "./NewTask/NewTask";
import UpdateTask from "./UpdateTask/UpdateTask";
import { Application } from "./Applications/Application";
import { Button } from "../../UICommon/Button/Button";
import { createTask, editTask } from "../../../Redux/reducers/tasksReducer";

import styles from "./tasks.module.scss";

const DashboardHeader = ({ dashNames, dashSizes }) => {
  return (
    <div className={styles.naming}>
      {dashNames.map((el) => (
        <div
          className={styles.item}
          key={el.name}
          style={{ width: dashSizes[el.name] }}
        >
          <p>{el.title}</p>
        </div>
      ))}
    </div>
  );
};

const Tasks = (props) => {
  const [isCreateForm, setCreateForm] = useState(false);
  const toggleCreateForm = () => setCreateForm(!isCreateForm);

  const posCalc = () =>
    (window.innerWidth - 1600) / 2 < 0
      ? window.innerWidth - 1600
      : (window.innerWidth - 1600) / 2;

  const [right, setRight] = useState(posCalc());

  useEffect(() => {
    isCreateForm &&
      window.addEventListener("resize", () => setRight(posCalc()));
    return () =>
      window.removeEventListener("resize", () => setRight(posCalc()));
  });

  const callEditForm = () => props.editTask(70684);
  return (
    <div className={styles.applications}>
      <div className={styles.buttons}>
        <Button
          title={props.newTask.ttl}
          width={props.newTask.w}
          height={props.newTask.h}
          clicked={isCreateForm}
          handler={toggleCreateForm}
        />
        <Button
          title="вызов"
          width="128px"
          height="40px"
          handler={callEditForm}
        />
      </div>

      <div className={styles.dashboard}>
        <DashboardHeader
          dashNames={props.dashNames}
          dashSizes={props.dashSizes}
        />
        <div className={styles.listing}>
          {props.dashData.map((req) => (
            <Application
              data={req}
              dashSizes={props.dashSizes}
              priorities={props.priorities}
              key={req.id}
            />
          ))}
        </div>
      </div>

      {isCreateForm && (
        <NewTask
          toggleCreateForm={toggleCreateForm}
          createTask={props.createTask}
          right={right}
        />
      )}

      {props.isEditFormOn && (
        <UpdateTask right={right} editTaskData={props.editTaskData} />
      )}
    </div>
  );
};

const mstp = (state) => ({
  newTask: state.ui.requests.newTask,
  dashNames: state.ui.requests.dashNames,
  dashSizes: state.ui.requests.dashSizes,
  dashData: state.tasks.requests,
  priorities: state.tasks.priorities,
  editTaskId: state.tasks.editTaskId,
  isEditFormOn: state.tasks.isEditFormOn,
  editTaskData: state.tasks.editTaskData,
});

export const TasksCont = connect(mstp, { createTask, editTask })(Tasks);
