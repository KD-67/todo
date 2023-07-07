import addIcon from "./media/add.png";
import { loadNewTaskForm } from "./loadNewTaskForm";

const loadAddNewTaskBtn = () => {
  const mainContent = document.querySelector(".main-content");
  const taskListContainer = document.querySelector(".task-list-container");

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

  // Task list container
  const newTaskContainer = document.createElement("div");
  mainContent.insertBefore(newTaskContainer, taskListContainer);
  newTaskContainer.classList.add("new-task-container");

  // Button functionality - bring up new task form
  addNewTaskIcon.addEventListener("click", () => {
    if (!newTaskContainer.hasChildNodes()) {
      loadNewTaskForm();
    }
  });
};

export { loadAddNewTaskBtn };
