import knowledgeBase from "../../Assets/Icons/knowledgeBase.png";
import applications from "../../Assets/Icons/applications.png";
import assets from "../../Assets/Icons/assets.png";
import clients from "../../Assets/Icons/clients.png";
import employees from "../../Assets/Icons/employees.png";
import settings from "../../Assets/Icons/settings.png";

const initialState = {
  menuUI: [
    { title: "База знаний", path: "", icon: knowledgeBase },
    { title: "Заявки", path: "", icon: applications },
    { title: "Сотрудники", path: "", icon: employees },
    { title: "Клиенты", path: "", icon: clients },
    { title: "Активы", path: "", icon: assets },
    { title: "Настройки", path: "", icon: settings },
  ],
  requests: {
    newRequest: { ttl: "Создать заявку", w: "180px", h: "40px" },
    dashboardHeader: ["", "ID", "Название", "Статус", "Исполнитель"],
  },
};

export const ui = (state = initialState) => state;
