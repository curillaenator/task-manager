import { Form } from "react-final-form";
import FormUpdate from "./FormUpdate";

const UpdateTask = ({
  editTaskData,
  statuses,
  managers,
  updateTask,
  setEditFormOff,
}) => {
  const onSubmit = (formData) => {
    formData.id = editTaskData.id;
    updateTask(formData);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form }) => (
        <FormUpdate
          handleSubmit={handleSubmit}
          form={form}
          editTaskData={editTaskData}
          statuses={statuses}
          managers={managers}
          setEditFormOff={setEditFormOff}
        />
      )}
    />
  );
};
export default UpdateTask;
