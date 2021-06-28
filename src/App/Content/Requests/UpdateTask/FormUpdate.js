import { Field } from "react-final-form";
import { Button } from "../../../UICommon/Button/Button";
import { DDSelect } from "../DDSelect/DDselect";
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

const Descriptions = ({ editTaskData, handleComment }) => {
  return (
    <div className={styles.descriptions}>
      <div className={styles.descr}>
        <h3>Описание</h3>
        <p>{editTaskData.description}</p>
      </div>

      <Field
        name="comment"
        component="textarea"
        placeholder="Добавление комментариев"
      />

      <div className={styles.save}>
        <Button
          title="Сохранить"
          width="150px"
          height="35px"
          handler={handleComment}
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

const SetterList = ({ editTaskData, statuses, managers, handleDropdown }) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return (
    <div className={styles.edits}>
      <DDSelect
        dotRgb={editTaskData.statusRgb}
        name="statusId"
        selected={editTaskData.statusId}
        options={statuses}
        handleDropdown={handleDropdown}
      />

      <div className={styles.issuer}>
        <h3>Заявитель</h3>
        <p>{editTaskData.initiatorName}</p>
      </div>

      <div className={styles.creator}>
        <h3>Создана</h3>
        <p>Маркова Анна</p>
      </div>

      <DDSelect
        name="executorId"
        selected={editTaskData.executorId}
        options={managers}
        handleDropdown={handleDropdown}
      />

      <div className={styles.priotity}>
        <h3>Приоритет</h3>
        <p>{editTaskData.priorityName}</p>
      </div>

      <div className={styles.expiry}>
        <h3>Срок</h3>
        <div className={styles.date}>
          <img src={date} alt="Дата" />
          <p>
            {new Date(editTaskData.resolutionDatePlan).toLocaleString(
              "ru",
              options
            )}
          </p>
        </div>
      </div>

      <div className={styles.tags}>
        <h3>Тэги</h3>
        {editTaskData.tags.map((t) => (
          <div className={styles.tag} key={t.id}>
            {t.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const FormUpdate = ({
  form,
  editTaskData,
  statuses,
  managers,
  handleSubmit,
  setEditFormOff,
}) => {
  const handleComment = (e) => {
    e.preventDefault();
    form.submit();
    form.change("comment", undefined);
  };

  const handleDropdown = (e, name) => {
    e.preventDefault();
    const comment = form.getFieldState("comment").value;
    form.change(name, e.target.value);
    form.change("comment", undefined);
    form.submit();
    form.change("comment", comment);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.updateTask}>
      <div className={styles.formTitle}>
        <div className={styles.formInfo}>
          <h2>№ {new Intl.NumberFormat("ru-RU").format(editTaskData.id)}</h2>
          <p>{editTaskData.name}</p>
        </div>

        <img src={close} alt="Закрыть" onClick={setEditFormOff} />
      </div>

      <div className={styles.formBody}>
        <Descriptions
          handleComment={handleComment}
          editTaskData={editTaskData}
        />

        <SetterList
          editTaskData={editTaskData}
          statuses={statuses}
          managers={managers}
          handleDropdown={handleDropdown}
        />
      </div>
    </form>
  );
};
export default FormUpdate;
