const loadMainTitle = () => {
  const mainContent = document.querySelector(".main-content");
  const taskList = document.querySelector(".task-list");

  // Create title:
  const mainTitle = document.createElement("h2");
  mainContent.insertBefore(mainTitle, taskList);
  mainTitle.classList.add("main-title");
  mainTitle.innerText = "TODAY";

  // Current date:
  const mainDate = document.createElement("h4");
  mainContent.insertBefore(mainDate, taskList);
  mainDate.classList.add("main-date");
  mainDate.innerText = "5 July 2023";
};

export { loadMainTitle };
