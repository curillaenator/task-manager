import { Form } from "react-final-form";
import FormUpdate from "./FormUpdate";

const UpdateTask = (props) => {
  const onSubmitCreate = (formData) => {
    formData.id = props.editTaskId;
    props.updateTask(formData);
  };
  return (
    <Form
      onSubmit={onSubmitCreate}
      render={({ handleSubmit, values, form, pristine }) => (
        <FormUpdate
          toggleCreateForm={props.toggleCreateForm}
          handleSubmit={handleSubmit}
          form={form}
          right={props.right}
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
