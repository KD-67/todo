import addIcon from "./add.png";
import { loadNewTaskForm } from "./loadNewTaskForm";

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

  // Task list container
  const taskContainer = document.createElement("div");
  mainContent.appendChild(taskContainer);
  taskContainer.classList.add("task-container");

  // Button functionality - bring up new task form
  addNewTaskIcon.addEventListener("click", () => {
    loadNewTaskForm();
  });

  /*
  // Submitting the form make the new task appear on the list

  const task = document.createElement("div");
  taskContainer.appendChild(task);
  task.classList.add("task");
  task.innerText = "NEW TASK";

  */
};

export { loadAddNewTaskBtn };
