import { Reducer, AnyAction } from "@reduxjs/toolkit";

import { batch } from "react-redux";
import { api } from "../../api";
import { initialize } from "./appReducer";

import {
  TasksState,
  ITask,
  ICreateTask,
  IUpdateTask,
  IStatus,
  IPriorities,
  IManager,
  TAction,
  TThunk,
} from "../../types/types";

const SET_ALL_TASKS = "tasksReducer/SET_TASKS";
const SET_PRIORITIES = "tasksReducer/SET_PRIORITIES";
const SET_STATUSES = "tasksReducer/SET_STATUSES";
const SET_EDIT_TASKID = "tasksReducer/SET_EDIT_TASKID";
const SET_EDIT_TASKDATA = "tasksReducer/SET_EDIT_TASKDATA";
const SET_EDIT_FORM_OFF = "tasksReducer/SET_EDIT_FORM_OFF";
const SET_NEW_FORM_OFF = "tasksReducer/SET_NEW_FORM_OFF";
const SET_MANAGERS = "tasksReducer/SET_MANAGERS";

const initialState: TasksState = {
  tasks: [],
  priorities: [],
  statuses: [],
  managers: [],
  editTaskId: null,
  editTaskData: null,
  isEditFormOn: false,
  isNewFormOn: false,
};

export const tasks: Reducer<TasksState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_ALL_TASKS:
      return { ...state, tasks: action.payload };

    case SET_PRIORITIES:
      return { ...state, priorities: action.payload };

    case SET_STATUSES:
      return { ...state, statuses: action.payload };

    case SET_EDIT_TASKID:
      return { ...state, editTaskId: action.id, isEditFormOn: true };

    case SET_EDIT_TASKDATA:
      return { ...state, editTaskData: action.payload };

    case SET_EDIT_FORM_OFF:
      return { ...state, editTaskId: null, isEditFormOn: false };

    case SET_NEW_FORM_OFF:
      return { ...state, isNewFormOn: action.formOn };

    case SET_MANAGERS:
      return { ...state, managers: action.payload };

    default:
      return state;
  }
};

// ACTIONs

const setTasks: TAction<ITask[]> = (payload) => ({
  type: SET_ALL_TASKS,
  payload,
});

const setPriorities: TAction<IPriorities[]> = (payload) => ({
  type: SET_PRIORITIES,
  payload,
});

const setStatuses: TAction<IStatus[]> = (payload) => ({
  type: SET_STATUSES,
  payload,
});

const setEditTaskId: TAction<number> = (id) => ({ type: SET_EDIT_TASKID, id });

const setEditTaskData: TAction<ITask> = (payload) => ({
  type: SET_EDIT_TASKDATA,
  payload,
});

export const setEditFormOff: TAction<void> = () => ({
  type: SET_EDIT_FORM_OFF,
});

const setManagers: TAction<IManager[]> = (payload) => ({
  type: SET_MANAGERS,
  payload,
});

// THUNKs

export const setInitial = (): TThunk => async (dispatch) => {
  const tasks: ITask[] = await api.getTasks();
  const priors: IPriorities[] = await api.getPriorities();
  const statuses: IStatus[] = await api.getStatuses();
  const managers: IManager[] = await api.getManagers();

  batch(() => {
    dispatch(setTasks(tasks));
    dispatch(setPriorities(priors));
    dispatch(setStatuses(statuses));
    dispatch(setManagers(managers));
    dispatch(initialize());
  });
};

export const createTask = (taskData: ICreateTask): TThunk => {
  return async (dispatch, getState) => {
    const newTaskID: number = await api.createTask(taskData);
    const newTask: ITask = await api.getTaskToEdit(newTaskID);
    const tasks: ITask[] = [...getState().tasks.tasks, newTask];

    batch(() => {
      dispatch(setEditTaskData(newTask));
      dispatch(setTasks(tasks));
      dispatch(setEditTaskId(newTaskID));
    });
  };
};

export const editTask = (id: number): TThunk => {
  return async (dispatch) => {
    const taskToEdit: ITask = await api.getTaskToEdit(id);

    batch(() => {
      dispatch(setEditTaskData(taskToEdit));
      dispatch(setEditTaskId(id));
    });
  };
};

export const updateTask = (updateData: IUpdateTask): TThunk => {
  return async (dispatch, getState) => {
    await api.updateTask(updateData);
    const taskUpdated: ITask = await api.getTaskToEdit(updateData.id);
    const tasks = getState().tasks.tasks.map((task) =>
      taskUpdated.id === task.id ? taskUpdated : task
    );

    batch(() => {
      dispatch(setTasks(tasks));
      dispatch(setEditTaskData(taskUpdated));
    });
  };
};
