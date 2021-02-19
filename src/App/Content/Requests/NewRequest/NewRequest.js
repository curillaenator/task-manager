import { Form } from "react-final-form";
import FormCreate from "./FormCreate";

const NewRequest = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values, form, pristine }) => (
        <FormCreate
          handleSubmit={handleSubmit}
          values={values}
          form={form}
          pristine={pristine}
        />
      )}
    />
  );
};
export default NewRequest;
