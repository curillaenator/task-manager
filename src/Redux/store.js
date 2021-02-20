import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { app } from "./reducers/appReducer";
import { ui } from "./reducers/UIReducer";
import { tasks } from "./reducers/tasksReducer";

const rootReducer = combineReducers({
  ui,
  app,
  tasks,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;
