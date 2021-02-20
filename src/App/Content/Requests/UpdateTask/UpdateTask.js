import { Form } from "react-final-form";
import FormUpdate from "./FormUpdate";

const UpdateTask = (props) => {
  const onSubmitCreate = (formData) => {
    console.log(formData);
  };
  return (
    <Form
      onSubmit={onSubmitCreate}
      render={({ handleSubmit, values, form, pristine }) => (
        <FormUpdate
          toggleCreateForm={props.toggleCreateForm}
          handleSubmit={handleSubmit}
          // values={values}
          form={form}
          right={props.right}
          editTaskData={props.editTaskData}
          // pristine={pristine}
        />
      )}
    />
  );
};
export default UpdateTask;
