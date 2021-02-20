import styles from "./application.module.scss";

const Priority = ({ priorities, width, priorityId }) => {
  const findColor = () => priorities.filter((p) => p.id === priorityId)[0];
  return (
    <div className={styles.priority} style={{ width }}>
      <div
        className={styles.color}
        style={{ backgroundColor: findColor().rgb }}
      ></div>
    </div>
  );
};

const Id = ({ id, width }) => {
  return (
    <div className={styles.id} style={{ width }}>
      {new Intl.NumberFormat("ru-RU").format(id)}
    </div>
  );
};

const Name = ({ name, width }) => {
  return (
    <div className={styles.name} style={{ width }}>
      <p>{name}</p>
    </div>
  );
};

const Status = ({ width, rgb, status }) => {
  return (
    <div className={styles.status} style={{ width }}>
      <div className={styles.bar} style={{ backgroundColor: rgb }}>
        {status}
      </div>
    </div>
  );
};

const Manager = ({ manager }) => {
  return <div className={styles.manager}>{manager}</div>;
};

export const Application = ({ priorities, dashSizes, data, editTask }) => {
  const editTaskHandler = () => editTask(data.id);
  return (
    <div className={styles.application} onClick={editTaskHandler}>
      <Priority
        priorities={priorities}
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
      <Manager manager={data.executorName} />
    </div>
  );
};
