import { Form } from "react-final-form";
import FormUpdate from "./FormUpdate";

const UpdateTask = (props) => {
  const onSubmit = (formData) => {
    formData.id = props.editTaskId;
    props.updateTask(formData);
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form }) => (
        <FormUpdate
          toggleCreateForm={props.toggleCreateForm}
          handleSubmit={handleSubmit}
          form={form}
          editTaskData={props.editTaskData}
          statuses={props.statuses}
          managers={props.managers}
          setEditFormOff={props.setEditFormOff}
        />
      )}
    />
  );
};
export default UpdateTask;
