import { Form } from "react-final-form";
import FormUpdate from "./FormUpdate";

const UpdateTask = (props) => {
  const onSubmitUpdate = (formData) => {
    formData.id = props.editTaskId;
    props.updateTask(formData);
    console.log(formData);
  };
  return (
    <Form
      onSubmit={onSubmitUpdate}
      render={({ handleSubmit, values, form, pristine }) => (
        <FormUpdate
          toggleCreateForm={props.toggleCreateForm}
          handleSubmit={handleSubmit}
          form={form}
          editTaskData={props.editTaskData}
          statuses={props.statuses}
          managers={props.managers}
          setEditFormOff={props.setEditFormOff}
          // values={values}
          // pristine={pristine}
        />
      )}
    />
  );
};
export default UpdateTask;
