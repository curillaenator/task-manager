import { useState, FC } from "react";
import { connect, ConnectedProps } from "react-redux";

import NewTask from "./NewTask/NewTask";
import UpdateTask from "./UpdateTask/UpdateTask";
import { SingleTask } from "./SingleTask/SingleTask";
import { Button } from "../../UICommon/Button/Button";

import {
  createTask,
  editTask,
  updateTask,
  setEditFormOff,
} from "../../../Redux/reducers/tasksReducer";
import { TState } from "../../../Redux/store";

import styles from "./tasks.module.scss";

type TTasks = ConnectedProps<typeof connector>;

const Tasks: FC<TTasks> = ({
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
          <div className={styles.naming}>
            {tasksUI.dashNames.map((dashItem) => {
              const dashSizes: any = tasksUI.dashSizes;
              const width: string = dashSizes[dashItem.name];

              return (
                <div
                  className={styles.item}
                  key={dashItem.name}
                  style={{ width }}
                >
                  <p>{dashItem.title}</p>
                </div>
              );
            })}
          </div>

          <div className={styles.listing}>
            {tasks.tasks.map((task) => (
              <SingleTask
                key={task.id}
                data={task}
                isCreateForm={isCreateForm}
                isEditFormOn={isEditFormOn}
                dashSizes={tasksUI.dashSizes}
                priorities={tasks.priorities}
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

const mstp = (state: TState) => ({
  tasksUI: state.ui.tasks,
  tasks: state.tasks,
  isEditFormOn: state.tasks.isEditFormOn,
  editTaskData: state.tasks.editTaskData,
});

const mdtp = {
  createTask,
  editTask,
  updateTask,
  setEditFormOff,
};

const connector = connect(mstp, mdtp);

export const TasksCont = connector(Tasks);
