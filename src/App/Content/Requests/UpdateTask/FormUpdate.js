import { Field } from "react-final-form";
import { Button } from "../../../UICommon/Button/Button";
import close from "../../../../Assets/Icons/close.png";
import styles from "./updatetask.module.scss";

const FormUpdate = ({ right, ...props }) => {
  const submit = () => {};

  return (
    <form
      onSubmit={props.handleSubmit}
      className={styles.updateTask}
      style={{ right }}
    >
      <div className={styles.formTitle}>
        <div className={styles.formInfo}>
          <h2>№ 50 156</h2>
          <p>
            Просьба оценить разработку рекламного баннера на новорижском шоссе.
            Форматы 600x500x30. Материал – полиестирол хорошего качества.
          </p>
        </div>
        <img src={close} alt="Закрыть" onClick={props.toggleCreateForm} />
      </div>

      <div className={styles.formBody}>
        <div className={styles.descriptions}>
          <div className={styles.descr}>
            <h3>Описание</h3>
            <p>
              Длительное время занимает сохранение продажи (вне зависимости от
              кол-ва добавленных товаров). Проверить, почему занимает столько
              времени. Это третья строка Это третья строкаЭто третья строкаЭто
              третья строкаЭто третья строкаЭто третья строкаЭто третья
              строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто
              третья строка третья строка тья строка тья строка конец!
            </p>
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
              handler={submit}
            />
          </div>

          <div className={styles.comment}>
              
          </div>
        </div>

        <div className={styles.statuses}></div>
      </div>
    </form>
  );
};
export default FormUpdate;
