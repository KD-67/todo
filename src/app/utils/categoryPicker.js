import { loadCategory } from "./loadCategory";

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
  const categoryDisplay = document.createElement("h4");
  mainContent.insertBefore(categoryDisplay, newTaskContainer);
  categoryDisplay.classList.add("category-display");
  categoryDisplay.innerText = category;

  // Load tasks from respective category
  loadCategory(category);
};

export { categoryPicker };
