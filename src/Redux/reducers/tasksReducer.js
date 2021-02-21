import { api } from "../../api";
import { initialize } from "./appReducer";

const SET_TASKS = "requestsReducer/SET_TASKS";
const SET_PRIORITIES = "requestsReducer/SET_PRIORITIES";
const SET_STATUSES = "requestsReducer/SET_STATUSES";
const SET_EDIT_TASKID = "requestsReducer/SET_EDIT_TASKID";
const SET_EDIT_TASKDATA = "requestsReducer/SET_EDIT_TASKDATA";
const SET_EDIT_FORM_OFF = "requestsReducer/SET_EDIT_FORM_OFF";
const SET_MANAGERS = "requestsReducer/SET_MANAGERS";

const initialState = {
  requests: [],
  priorities: [],
  statuses: [],
  managers: [],
  editTaskId: null,
  editTaskData: null,
  isEditFormOn: false,
};

export const tasks = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, requests: action.payload };
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
    case SET_MANAGERS:
      return { ...state, managers: action.payload };
    default:
      return state;
  }
};

// ACTIONs

const setTasks = (payload) => ({ type: SET_TASKS, payload });
const setPriorities = (payload) => ({ type: SET_PRIORITIES, payload });
const setStatuses = (payload) => ({ type: SET_STATUSES, payload });
const setEditTaskId = (id) => ({ type: SET_EDIT_TASKID, id });
const setEditTaskData = (payload) => ({ type: SET_EDIT_TASKDATA, payload });
export const setEditFormOff = () => ({ type: SET_EDIT_FORM_OFF });
const setManagers = (payload) => ({ type: SET_MANAGERS, payload });

// THUNKs

export const setInitial = () => async (dispatch) => {
  const tasks = await api.getTasks();
  const priors = await api.getPriorities();
  const stats = await api.getStatuses();
  const managers = await api.getManagers();
  dispatch(setTasks(tasks));
  dispatch(setPriorities(priors));
  dispatch(setStatuses(stats));
  dispatch(setManagers(managers));
  dispatch(initialize());
};
export const createTask = (taskData) => async (dispatch) => {
  const taskId = await api.createTask(taskData);
  const taskToEdit = await api.getTaskToEdit(taskId);
  const tasks = await api.getTasks();
  dispatch(setEditTaskData(taskToEdit));
  dispatch(setTasks(tasks));
  dispatch(setEditTaskId(taskId));
};

export const editTask = (id) => async (dispatch) => {
  const taskToEdit = await api.getTaskToEdit(id);
  dispatch(setEditTaskData(taskToEdit));
  dispatch(setEditTaskId(id));
};

export const updateTask = (updateData) => async (dispatch) => {
  await api.updateTask(updateData);
  const tasks = await api.getTasks();
  dispatch(setTasks(tasks));
  const taskToEdit = await api.getTaskToEdit(updateData.id);
  dispatch(setEditTaskData(taskToEdit));
};
