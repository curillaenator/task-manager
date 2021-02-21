import { useState, useEffect } from "react";
import { Field } from "react-final-form";
import { Button } from "../../../UICommon/Button/Button";
import avatar from "../../../../Assets/Images/Avatar.jpg";
import close from "../../../../Assets/Icons/close.png";
import styles from "./updatetask.module.scss";
import date from "../../../../Assets/Icons/date.png";

const Comment = ({ item }) => {
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return (
    <div className={styles.comment}>
      <div className={styles.title}>
        <div className={styles.avatar}>
          <img src={avatar} alt={item.userName} />
        </div>

        <div className={styles.misc}>
          <h3>{item.userName}</h3>
          <p>
            {new Date(item.createdAt).toLocaleString("ru", options)}{" "}
            прокомментировал
          </p>
        </div>
      </div>

      <div className={styles.text}>{item.comment}</div>
    </div>
  );
};

const Descriptions = ({ editTaskData, ...props }) => {
  return (
    <div className={styles.descriptions}>
      <div className={styles.descr}>
        <h3>Описание</h3>
        <p>{editTaskData.description}</p>
      </div>

      <Field
        name="comment"
        component="textarea"
        placeholder="Добавление комментария"
      />

      <div className={styles.save}>
        <Button
          title="Сохранить"
          width="150px"
          height="35px"
          handler={props.submit}
        />
      </div>
      <div className={styles.commentaries}>
        {editTaskData.lifetimeItems
          .filter((item) => item.comment)
          .map((item) => (
            <Comment item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

const Status = ({ statuses, statusId, submit, statusRgb }) => {
  const [dot, setDot] = useState("#ecf3f7");
  useEffect(() => setDot(statusRgb), [statusRgb]);
  
  const statusHandler = (e) => {
    setDot(statuses.find((s) => s.id === +e.target.value).rgb);
    submit();
  };

  return (
    <div className={styles.status}>
      <div className={styles.dot} style={{ backgroundColor: dot }}></div>
      <Field
        name="statusId"
        component="select"
        defaultValue={statusId}
        onClick={statusHandler}
      >
        {statuses.map((s) => (
          <option value={s.id} key={s.id}>
            {s.name}
          </option>
        ))}
      </Field>
    </div>
  );
};

const Manager = ({ managers, manager, submit }) => {
  return (
    <div className={styles.manager}>
      <h3>Исполнитель</h3>
      <Field
        name="executorId"
        component="select"
        defaultValue={manager}
        onClick={submit}
      >
        {managers.map((m) => (
          <option value={m.id} key={m.id}>
            {m.name}
          </option>
        ))}
      </Field>
    </div>
  );
};

const Edits = (props) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return (
    <div className={styles.edits}>
      <Status
        statuses={props.statuses}
        statusId={props.editTaskData.statusId}
        statusRgb={props.editTaskData.statusRgb}
        submit={props.submit}
      />

      <div className={styles.issuer}>
        <h3>Заявитель</h3>
        <p>{props.editTaskData.initiatorName}</p>
      </div>

      <div className={styles.creator}>
        <h3>Создана</h3>
        <p>Маркова Анна</p>
      </div>

      <Manager
        managers={props.managers}
        manager={props.editTaskData.executorId}
        submit={props.submit}
      />

      <div className={styles.priotity}>
        <h3>Приоритет</h3>
        <p>{props.editTaskData.priorityName}</p>
      </div>

      <div className={styles.expiry}>
        <h3>Срок</h3>
        <div className={styles.date}>
          <img src={date} alt="Дата" />
          <p>
            {new Date(props.editTaskData.resolutionDatePlan).toLocaleString(
              "ru",
              options
            )}
          </p>
        </div>
      </div>

      <div className={styles.tags}>
        <h3>Тэги</h3>
        <p>апывпывпы</p>
      </div>
    </div>
  );
};

const FormUpdate = ({ editTaskData, ...props }) => {
  const submitComment = (e) => {
    e.preventDefault();
    props.form.submit();
    props.form.change("comment", "");
  };

  return (
    <form
      onSubmit={props.handleSubmit}
      className={styles.updateTask}
    >
      <div className={styles.formTitle}>
        <div className={styles.formInfo}>
          <h2>№ {new Intl.NumberFormat("ru-RU").format(editTaskData.id)}</h2>
          <p>{editTaskData.name}</p>
        </div>
        <img src={close} alt="Закрыть" onClick={props.setEditFormOff} />
      </div>

      <div className={styles.formBody}>
        <Descriptions submit={submitComment} editTaskData={editTaskData} />
        <Edits
          editTaskData={editTaskData}
          statuses={props.statuses}
          managers={props.managers}
          submit={props.form.submit}
        />
      </div>
    </form>
  );
};
export default FormUpdate;
