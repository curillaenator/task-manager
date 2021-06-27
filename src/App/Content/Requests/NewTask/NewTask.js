import { Form } from "react-final-form";
import FormCreate from "./FormCreate";

const NewTask = ({ toggleCreateForm, createTask }) => {
  const onSubmitCreate = (formData) => {
    formData.resolutionDatePlan = new Date().toISOString();
    createTask(formData);
  };

  return (
    <Form
      onSubmit={onSubmitCreate}
      render={({ handleSubmit, form, values }) => (
        <FormCreate
          toggleCreateForm={toggleCreateForm}
          handleSubmit={handleSubmit}
          values={values}
          form={form}
          // display={display}
          // right={props.right}
        />
      )}
    />
  );
};
export default NewTask;
