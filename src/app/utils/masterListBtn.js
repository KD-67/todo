const loadMasterList = () => {
  const mainContent = document.querySelector(".main-content");
  const newTaskContainer = document.querySelector(".new-task-container");

  // Remove previous titles:
  mainContent.removeChild(mainContent.firstElementChild);
  mainContent.removeChild(mainContent.firstElementChild);

  // Create title:
  const mainTitle = document.createElement("h2");
  mainContent.insertBefore(mainTitle, newTaskContainer);
  mainTitle.classList.add("main-title");
  mainTitle.innerText = "Master List";

  // Current date:
  const mainDate = document.createElement("h4");
  mainContent.insertBefore(mainDate, newTaskContainer);
  mainDate.classList.add("main-date");
  mainDate.innerText = "(all dates)";
};

export { loadMasterList };
