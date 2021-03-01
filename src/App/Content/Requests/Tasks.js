import { useState } from "react";
import { connect } from "react-redux";
import NewTask from "./NewTask/NewTask";
import UpdateTask from "./UpdateTask/UpdateTask";
import { Application } from "./Applications/Application";
import { Button } from "../../UICommon/Button/Button";
import {
  createTask,
  editTask,
  updateTask,
  setEditFormOff,
} from "../../../Redux/reducers/tasksReducer";

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
  const listStyle =
    isCreateForm || props.isEditFormOn ? { width: "calc(100% - 976px)" } : {};

  return (
    <div className={styles.applications} style={listStyle}>
      <div className={styles.list}>
        <div className={styles.buttons}>
          <Button
            title={props.newTask.ttl}
            width={props.newTask.w}
            height={props.newTask.h}
            clicked={isCreateForm}
            handler={toggleCreateForm}
            disabled={props.isEditFormOn}
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
                statuses={props.statuses}
                key={req.id}
                editTask={props.editTask}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.forms}>
        {isCreateForm && (
          <NewTask
            toggleCreateForm={toggleCreateForm}
            createTask={props.createTask}
            display={props.isEditFormOn}
          />
        )}

        {props.isEditFormOn && (
          <UpdateTask
            editTaskData={props.editTaskData}
            editTaskId={props.editTaskId}
            statuses={props.statuses}
            managers={props.managers}
            updateTask={props.updateTask}
            setEditFormOff={props.setEditFormOff}
          />
        )}
      </div>
    </div>
  );
};

const mstp = (state) => ({
  newTask: state.ui.tasks.newTask,
  saveComment: state.ui.tasks.saveComment,
  dashNames: state.ui.tasks.dashNames,
  dashSizes: state.ui.tasks.dashSizes,
  dashData: state.tasks.tasks,
  priorities: state.tasks.priorities,
  statuses: state.tasks.statuses,
  managers: state.tasks.managers,
  editTaskId: state.tasks.editTaskId,
  isEditFormOn: state.tasks.isEditFormOn,
  editTaskData: state.tasks.editTaskData,
});

export const TasksCont = connect(mstp, {
  createTask,
  editTask,
  updateTask,
  setEditFormOff,
})(Tasks);
