import knowledgeBase from "../../Assets/Icons/knowledgeBase.png";
import applications from "../../Assets/Icons/applications.png";
import assets from "../../Assets/Icons/assets.png";
import clients from "../../Assets/Icons/clients.png";
import employees from "../../Assets/Icons/employees.png";
import settings from "../../Assets/Icons/settings.png";

// Использую стейт (через создание редюсера) для хранения параметров 
// элементов UI в одном месте

const initialState = {
  menuUI: [
    { title: "База знаний", path: "/knowledge", icon: knowledgeBase },
    { title: "Заявки", path: "/requests", icon: applications },
    { title: "Сотрудники", path: "/employees", icon: employees },
    { title: "Клиенты", path: "/clients", icon: clients },
    { title: "Активы", path: "/assets", icon: assets },
    { title: "Настройки", path: "/settings", icon: settings },
  ],
  tasks: {
    newTask: { ttl: "Создать заявку", w: "180px", h: "40px" }, // кнопка создания заявки
    saveComment: { ttl: "Сохранить", w: "150px", h: "35px" }, // кнопка сохранения комментария к заявке
    dashSizes: {
      priority: "36px",
      id: "80px",
      name: "420px",
      status: "125px",
      manager: "",
    }, // ширины полей в списке заявок
    dashNames: [
      { name: "priority", title: "" },
      { name: "id", title: "ID" },
      { name: "name", title: "Название" },
      { name: "status", title: "Статус" },
      { name: "manager", title: "Исполнитель" },
    ], // заголовок списка заявок
  },
};

export const ui = (state = initialState) => state;
