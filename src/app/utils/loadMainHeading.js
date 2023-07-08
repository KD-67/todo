import { newTaskSubmit } from "./newTaskSubmit";

const loadMainTitle = () => {
  const mainContent = document.querySelector(".main-content");
  const taskListContainer = document.querySelector(".task-list-container");

  // Create title:
  const mainTitle = document.createElement("h2");
  mainContent.insertBefore(mainTitle, taskListContainer);
  mainTitle.classList.add("main-title");
  mainTitle.innerText = "Master List";

  // Current date:
  const mainDate = document.createElement("h4");
  mainContent.insertBefore(mainDate, taskListContainer);
  mainDate.classList.add("main-date");
  mainDate.innerText = "(all dates)";
};

export { loadMainTitle };
