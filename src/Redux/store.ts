import { configureStore } from "@reduxjs/toolkit";

import { app } from "./reducers/appReducer";
import { ui } from "./reducers/UIReducer";
import { tasks } from "./reducers/tasksReducer";

export const store = configureStore({ reducer: { ui, app, tasks } });

export type TState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;

(window as any).store = store;
