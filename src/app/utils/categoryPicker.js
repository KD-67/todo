const categoryPicker = (category) => {
  const mainContent = document.querySelector(".main-content");
  const newTaskContainer = document.querySelector(".new-task-container");

  // Remove previous titles:
  mainContent.removeChild(mainContent.firstElementChild);
  mainContent.removeChild(mainContent.firstElementChild);

  // Create title:
  const newCategoryTitle = document.createElement("h2");
  mainContent.insertBefore(newCategoryTitle, newTaskContainer);
  newCategoryTitle.classList.add("category-title");
  newCategoryTitle.innerText = "Category:";

  // Current date:
  const newCategoryDate = document.createElement("h4");
  mainContent.insertBefore(newCategoryDate, newTaskContainer);
  newCategoryDate.classList.add("category-date");
  newCategoryDate.innerText = category;

  
};

export { categoryPicker };
