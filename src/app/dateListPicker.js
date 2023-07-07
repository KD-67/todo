const dateListPicker = (date) => {
  const mainContent = document.querySelector(".main-content");
  const taskListContainer = document.querySelector(".task-list-container");
  const mainTitle = document.querySelector(".main-title");
  const mainDate = document.querySelector(".main-date");
  const categoryTitle = document.querySelector(".category-title");
  const categoryDate = document.querySelector(".category-date");

  // Remove previous titles:
  mainContent.removeChild(mainContent.firstElementChild);
  mainContent.removeChild(mainContent.firstElementChild);

  // Create title:
  const newCategoryTitle = document.createElement("h2");
  mainContent.insertBefore(newCategoryTitle, taskListContainer);
  newCategoryTitle.classList.add("category-title");
  newCategoryTitle.innerText = "Chosen date:";

  // Current date:
  const newCategoryDate = document.createElement("h4");
  mainContent.insertBefore(newCategoryDate, taskListContainer);
  newCategoryDate.classList.add("category-date");
  newCategoryDate.innerText = date;
};

export { dateListPicker };
