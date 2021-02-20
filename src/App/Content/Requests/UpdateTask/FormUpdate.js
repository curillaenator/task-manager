import { Field } from "react-final-form";
import { Button } from "../../../UICommon/Button/Button";
import avatar from "../../../../Assets/Images/Avatar.jpg";
import close from "../../../../Assets/Icons/close.png";
import styles from "./updatetask.module.scss";

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
          <img src={avatar} alt="" />
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

      {editTaskData.lifetimeItems
        .filter((item) => item.comment)
        .map((item) => (
          <Comment item={item} key={item.id} />
        ))}
    </div>
  );
};

const Edits = (props) => {
  return (
    <div className={styles.edits}>
      <div className={styles.status}>
        <div className={styles.dot}></div>
        <Field name="status" component="select">
          <option value="123">В работе</option>
          <option value="456">dfhdf</option>
          <option value="258">sdfsdf</option>
        </Field>
      </div>

      <div className={styles.issuer}>
        <h3>Заявитель</h3>
        <p>Александр Вознесенский</p>
      </div>

      <div className={styles.creator}>
        <h3>Создана</h3>
        <p>Маркова Анна</p>
      </div>

      <div className={styles.manager}>
        <h3>Исполнитель</h3>
        <p>Кожин Игорь</p>
      </div>

      <div className={styles.priotity}>
        <h3>Приоритет</h3>
        <p>Высокий</p>
      </div>

      <div className={styles.expiry}>
        <h3>Срок</h3>
        <p>28.02.2021</p>
      </div>

      <div className={styles.tags}>
        <h3>Тэги</h3>
        <p>апывпывпы</p>
      </div>
    </div>
  );
};

const FormUpdate = ({ right, editTaskData, ...props }) => {
  //   console.log(props);
  const submit = () => {};

  return (
    <form
      onSubmit={props.handleSubmit}
      className={styles.updateTask}
      style={{ right }}
    >
      <div className={styles.formTitle}>
        <div className={styles.formInfo}>
          <h2>№ {new Intl.NumberFormat("ru-RU").format(editTaskData.id)}</h2>
          <p>{editTaskData.name}</p>
        </div>
        <img src={close} alt="Закрыть" onClick={props.toggleCreateForm} />
      </div>

      <div className={styles.formBody}>
        <Descriptions submit={submit} editTaskData={editTaskData} />
        <Edits editTaskData={editTaskData} />
      </div>
    </form>
  );
};
export default FormUpdate;
