import { FC } from "react";
import { Form } from "react-final-form";
import FormUpdate from "./FormUpdate";

import type {
  ITask,
  IManager,
  IStatus,
  IUpdateTask,
  TAction,
} from "../../../../types/types";

interface IUpdateTaskC {
  editTaskData: ITask;
  statuses: IStatus[];
  managers: IManager[];
  updateTask: (updateData: IUpdateTask) => void;
  setEditFormOff: TAction<void>;
}

const UpdateTask: FC<IUpdateTaskC> = ({
  editTaskData,
  statuses,
  managers,
  updateTask,
  setEditFormOff,
}) => {
  const onSubmit = (formData: IUpdateTask) => {
    formData.id = editTaskData.id;
    updateTask(formData);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form }) => (
        <FormUpdate
          form={form}
          editTaskData={editTaskData}
          statuses={statuses}
          managers={managers}
          setEditFormOff={setEditFormOff}
          handleSubmit={handleSubmit}
        />
      )}
    />
  );
};
export default UpdateTask;
