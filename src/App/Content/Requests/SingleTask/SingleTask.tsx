import { FC } from "react";

import type { ITask, IPriorities } from "../../../../types/types";
import type { IDashSizes } from "../../../../Redux/reducers/UIReducer";

import styles from "./singletask.module.scss";

interface IPriority {
  priorities: IPriorities[];
  width: string;
  priorityId: number;
  statusRgb: string;
}

const Priority: FC<IPriority> = ({
  priorities,
  width,
  priorityId,
  statusRgb,
}) => {
  // const findColor = () => priorities.filter((p) => p.id === priorityId)[0];
  return (
    <div className={styles.priority} style={{ width }}>
      <div
        className={styles.color}
        // style={{ backgroundColor: findColor().rgb }}
        style={{ backgroundColor: statusRgb }}
      ></div>
    </div>
  );
};

interface IId {
  id: number;
  width: string;
}

const Id: FC<IId> = ({ id, width }) => (
  <div className={styles.id} style={{ width }}>
    {new Intl.NumberFormat("ru-RU").format(id)}
  </div>
);

interface IName {
  name: string;
  width: string;
}

const Name: FC<IName> = ({ name, width }) => (
  <div className={styles.name} style={{ width }}>
    <p>{name}</p>
  </div>
);

interface IStatus {
  rgb: string;
  width: string;
  status: string;
}

const Status: FC<IStatus> = ({ width, rgb, status }) => (
  <div className={styles.status} style={{ width }}>
    <div className={styles.bar} style={{ backgroundColor: rgb }}>
      {status}
    </div>
  </div>
);

interface IManager {
  manager: string;
  width: string;
}

const Manager: FC<IManager> = ({ width, manager }) => (
  <div className={styles.manager} style={{ width }}>
    <p>{manager}</p>
  </div>
);

interface ISingleTask {
  key: number;
  data: ITask;
  isCreateForm: boolean;
  isEditFormOn: boolean;
  dashSizes: IDashSizes;
  priorities: IPriorities[];
  editTask: (id: number) => void;
  setCreateForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SingleTask: FC<ISingleTask> = ({
  isCreateForm,
  isEditFormOn,
  priorities,
  dashSizes,
  data,
  editTask,
  setCreateForm,
}) => {
  const editTaskHandler = () => {
    setCreateForm(false);
    editTask(data.id);
  };

  const managerStyle =
    isCreateForm || isEditFormOn ? dashSizes.manager : "calc(100% - 736px)";
  return (
    <div className={styles.application} onClick={editTaskHandler}>
      <Priority
        priorities={priorities}
        statusRgb={data.statusRgb}
        width={dashSizes.priority}
        priorityId={data.priorityId}
      />

      <Id id={data.id} width={dashSizes.id} />

      <Name name={data.name} width={dashSizes.name} />

      <Status
        width={dashSizes.status}
        rgb={data.statusRgb}
        status={data.statusName}
      />

      <Manager manager={data.executorName} width={managerStyle} />
    </div>
  );
};
