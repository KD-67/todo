import addIcon from "./add.png";

const loadAddNewTaskBtn = () => {
  const mainContent = document.querySelector(".main-content");

  // "Add new todo" button container
  const addNewTaskContainer = document.createElement("div");
  mainContent.appendChild(addNewTaskContainer);
  addNewTaskContainer.classList.add("add-new-task-container");

  // "Add new todo" icon
  const addNewTaskIcon = document.createElement("img");
  addNewTaskContainer.appendChild(addNewTaskIcon);

  addNewTaskIcon.classList.add("add-new-task-icon");
  addNewTaskIcon.src = addIcon;
  addNewTaskIcon.alt = "Add new To Do item";
};

export { loadAddNewTaskBtn };
