import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { TState } from "../Redux/store";

const task = {
  createdAt: "2021-02-19T09:54:30.7338014+03:00",
  description:
    '<p style="color: #e5e5e5;">Уха</p> из трех видов рыб. Салат с телятиной. МОРС КЛЮКВЕННЫЙ',
  executorGroupId: 20611,
  executorGroupName: "Офис менеджеры",
  executorId: 20612,
  executorName: "Петров Борис",
  id: 70684,
  initiatorId: 20613,
  initiatorName: "Иванов Андрей",
  name: "Заказать обед",
  price: 100,
  priorityId: 34353,
  priorityName: "Средний",
  resolutionDatePlan: "2021-02-19T09:54:30.7338014+03:00",
  serviceId: 20611,
  serviceName: "Еда > Заказ обедов",
  statusId: 41221,
  statusName: "Отложена",
  statusRgb: "#909090",
  tags: [
    { id: 34352, name: "Салат" },
    { id: 34351, name: "Суп" },
  ],
  taskTypeId: 20612,
  taskTypeName: "Стандартный",
  updatedAt: "2021-06-27T19:38:23.0017041+03:00",
};

export type TAction<T> = (payload?: T) => { type: string; payload?: T };
export type TThunk = ThunkAction<void, TState, unknown, AnyAction>;

export interface IStatus {
  id: number;
  name: string;
  rgb: string;
}

export interface IPriorities {
  id: number;
  name: string;
  rgb: string;
}

export interface IManager {
  id: number;
  name: string;
}

export type ITask = typeof task;

export interface ICreateTask {
  description: string;
  name: string;
  resolutionDatePlan: string;
}

export interface TasksState {
  tasks: ITask[];
  priorities: IPriorities[];
  statuses: IStatus[];
  managers: IManager[];
  editTaskId: number | null;
  editTaskData: any;
  isEditFormOn: boolean;
  isNewFormOn: boolean;
}
