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

  // Title
  const mainTitle = document.createElement("h2");
  mainTitle.classList.add("main-title");
  mainContent.appendChild(mainTitle);
  mainTitle.innerText = "TODAY 5 July 2023";
};

export { loadAddNewTaskBtn };
