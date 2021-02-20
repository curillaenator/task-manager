import { api } from "../../api";
import { initialize } from "./appReducer";

const SET_TASKS = "requestsReducer/SET_TASKS";
const SET_PRIORITIES = "requestsReducer/SET_PRIORITIES";
const SET_STATUSES = "requestsReducer/SET_STATUSES";
const SET_EDIT_TASKID = "requestsReducer/SET_EDIT_TASKID";
const SET_EDIT_FORM_OFF = "requestsReducer/SET_EDIT_FORM_OFF";

const initialState = {
  requests: [],
  priorities: [],
  statuses: [],
  editTaskId: null,
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
    case SET_EDIT_FORM_OFF:
      return { ...state, isEditFormOn: false };
    default:
      return state;
  }
};

// ACTIONs

const setTasks = (payload) => ({ type: SET_TASKS, payload });
const setPriorities = (payload) => ({ type: SET_PRIORITIES, payload });
const setStatuses = (payload) => ({ type: SET_STATUSES, payload });
const setEditTaskId = (id) => ({ type: SET_EDIT_TASKID, id });
const setEditFormOff = () => ({ type: SET_EDIT_FORM_OFF });

// THUNKs

export const setInitial = () => async (dispatch) => {
  const tasks = await api.getTasks();
  const priors = await api.getPriorities();
  const stats = await api.getStatuses();
  dispatch(setTasks(tasks));
  dispatch(setPriorities(priors));
  dispatch(setStatuses(stats));
  dispatch(initialize());
};
export const createTask = (taskData) => async (dispatch) => {
  const taskId = await api.createTask(taskData);
  const tasks = await api.getTasks();
  dispatch(setTasks(tasks));
  dispatch(setEditTaskId(taskId));
};
