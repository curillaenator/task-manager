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

const Tasks = ({
  tasksUI,
  tasks,
  isEditFormOn,
  editTaskData,
  editTask,
  createTask,
  updateTask,
  setEditFormOff,
}) => {
  const [isCreateForm, setCreateForm] = useState(false);

  const listStyle =
    isCreateForm || isEditFormOn ? { width: "calc(100% - 976px)" } : {};

  return (
    <div className={styles.applications} style={listStyle}>
      <div className={styles.list}>
        <div className={styles.buttons}>
          <Button
            title={tasksUI.newTask.ttl}
            width={tasksUI.newTask.w}
            height={tasksUI.newTask.h}
            clicked={isCreateForm}
            handler={() => setCreateForm(!isCreateForm)}
            disabled={isEditFormOn}
          />
        </div>

        <div className={styles.dashboard}>
          <DashboardHeader
            dashNames={tasksUI.dashNames}
            dashSizes={tasksUI.dashSizes}
          />

          <div className={styles.listing}>
            {tasks.tasks.map((applic) => (
              <Application
                key={applic.id}
                data={applic}
                isCreateForm={isCreateForm}
                isEditFormOn={isEditFormOn}
                dashSizes={tasksUI.dashSizes}
                priorities={tasks.priorities}
                statuses={tasks.statuses}
                editTask={editTask}
                setCreateForm={setCreateForm}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.forms}>
        {isCreateForm && !isEditFormOn && (
          <NewTask
            toggleCreateForm={() => setCreateForm(!isCreateForm)}
            createTask={createTask}
          />
        )}

        {isEditFormOn && (
          <UpdateTask
            editTaskData={editTaskData}
            statuses={tasks.statuses}
            managers={tasks.managers}
            updateTask={updateTask}
            setEditFormOff={setEditFormOff}
          />
        )}
      </div>
    </div>
  );
};

const mstp = (state) => ({
  tasksUI: state.ui.tasks,
  tasks: state.tasks,
  // saveComment: state.ui.tasks.saveComment,
  isEditFormOn: state.tasks.isEditFormOn,
  editTaskData: state.tasks.editTaskData,
});

export const TasksCont = connect(mstp, {
  createTask,
  editTask,
  updateTask,
  setEditFormOff,
})(Tasks);
