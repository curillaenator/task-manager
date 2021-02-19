import knowledgeBase from "../../Assets/Icons/knowledgeBase.png";
import applications from "../../Assets/Icons/applications.png";
import assets from "../../Assets/Icons/assets.png";
import clients from "../../Assets/Icons/clients.png";
import employees from "../../Assets/Icons/employees.png";
import settings from "../../Assets/Icons/settings.png";

const initialState = {
  menuUI: [
    { title: "База знаний", icon: knowledgeBase },
    { title: "Заявки", icon: applications },
    { title: "Сотрудники", icon: employees },
    { title: "Клиенты", icon: clients },
    { title: "Активы", icon: assets },
    { title: "Настройки", icon: settings },
  ],
};

export const ui = (state = initialState) => state;
