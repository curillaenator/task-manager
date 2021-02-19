import knowledgeBase from "../../Assets/Icons/knowledgeBase.png";
import applications from "../../Assets/Icons/applications.png";
import assets from "../../Assets/Icons/assets.png";
import clients from "../../Assets/Icons/clients.png";
import employees from "../../Assets/Icons/employees.png";
import settings from "../../Assets/Icons/settings.png";

const initialState = {
  menuUI: [
    { title: "База знаний", path: "/knowledge", icon: knowledgeBase },
    { title: "Заявки", path: "/requests", icon: applications },
    { title: "Сотрудники", path: "/employees", icon: employees },
    { title: "Клиенты", path: "/clients", icon: clients },
    { title: "Активы", path: "/assets", icon: assets },
    { title: "Настройки", path: "/settings", icon: settings },
  ],
  requests: {
    newRequest: { ttl: "Создать заявку", w: "180px", h: "40px" },
    dashSizes: {
      priority: "36px",
      id: "80px",
      name: "420px",
      status: "125px",
      manager: "",
    },
    dashboardNames: [
      { name: "priority", title: "" },
      { name: "id", title: "ID" },
      { name: "name", title: "Название" },
      { name: "status", title: "Статус" },
      { name: "manager", title: "Исполнитель" },
    ],
  },
};

export const ui = (state = initialState) => state;
