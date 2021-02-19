import { api } from "../../api";
import { initialize } from "./appReducer";

const SET_REQUESTS = "requestsReducer/SET_REQUESTS";
const SET_PRIORITIES = "requestsReducer/SET_PRIORITIES";
const SET_STATUSES = "requestsReducer/SET_STATUSES";

const initialState = {
  requests: [],
  priorities: [],
  statuses: [],
};

export const requests = (state = initialState, action) => {
  switch (action.type) {
    case SET_REQUESTS:
      return { ...state, requests: action.payload };
    case SET_PRIORITIES:
      return { ...state, priorities: action.payload };
    case SET_STATUSES:
      return { ...state, statuses: action.payload };
    default:
      return state;
  }
};

// ACTIONs

const setRequests = (payload) => ({ type: SET_REQUESTS, payload });
const setPriorities = (payload) => ({ type: SET_PRIORITIES, payload });
const setStatuses = (payload) => ({ type: SET_STATUSES, payload });

// THUNKs

export const setInitial = () => async (dispatch) => {
  const reqs = await api.getRequests();
  const priors = await api.getPriorities();
  const stats = await api.getStatuses();
  dispatch(setRequests(reqs));
  dispatch(setPriorities(priors));
  dispatch(setStatuses(stats));
  dispatch(initialize());
};
