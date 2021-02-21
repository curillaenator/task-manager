import { Form } from "react-final-form";
import FormCreate from "./FormCreate";

const NewTask = (props) => {
  const onSubmitCreate = (formData) => {
    console.log("work");
    formData.resolutionDatePlan = new Date().toISOString();
    props.createTask(formData);
  };
  return (
    <Form
      onSubmit={onSubmitCreate}
      render={({ handleSubmit, form, values }) => (
        <FormCreate
          toggleCreateForm={props.toggleCreateForm}
          handleSubmit={handleSubmit}
          values={values}
          form={form}
          right={props.right}
        />
      )}
    />
  );
};
export default NewTask;
