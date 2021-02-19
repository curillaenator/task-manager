import axios from "axios";

const key = "7eeb57a4-d80d-490a-8afe-53ee95d5fb39";
const base = axios.create({
  baseURL: "http://intravision-task.test01.intravision.ru/",
});

export const api = {
  getRequests: () =>
    base.get(`odata/tasks?tenantguid=${key}`).then((r) => r.data.value),
  getPriorities: () => base.get(`api/${key}/Priorities`).then((r) => r.data),
  getStatuses: () => base.get(`api/${key}/Statuses`).then((r) => r.data),
};
