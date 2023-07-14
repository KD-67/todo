import { categoryListArray } from "./categoryListArray";
import { addCategoryToDropDownList } from "./addCategoryToDropdownList";

const addDefaultCategoryDisplay = () => {
  // 1. pushes the default categories to categoryListArray
  // 2. displays those categoies in the dropdown list

  // Create dropdownList options using categoryListArray
  categoryListArray.forEach((category) => addCategoryToDropDownList(category));

  ////////////////////////////////////////////////////////////////////////////////////
  /*
  // Dropdown list options

  // Home
  const home = document.createElement("div");
  dropdownList.appendChild(home);
  home.classList.add("category-div");

  // Home text
  const homeText = document.createElement("h4");
  home.appendChild(homeText);
  homeText.classList.add("category-text");
  homeText.innerText = "Home";

  // Home delete button
  const homeDelete = document.createElement("img");
  home.appendChild(homeDelete);
  homeDelete.src = deleteIcon;
  homeDelete.classList.add("delete-category-btn");

  // Home functionality
  homeText.addEventListener("click", (e) => {
    e.preventDefault();
    categoryPicker("Home");
  });

  // Home delete functionality
  homeDelete.addEventListener("click", (e) => {
    e.preventDefault();
    deleteCategory("Home");
  });

  // Work
  const work = document.createElement("div");
  dropdownList.appendChild(work);
  work.classList.add("category-div");

  // Work text
  const workText = document.createElement("h4");
  work.appendChild(workText);
  workText.classList.add("category-text");
  workText.innerText = "Work";

  // Work delete button
  const workDelete = document.createElement("img");
  work.appendChild(workDelete);
  workDelete.src = deleteIcon;
  workDelete.classList.add("delete-category-btn");

  // Work functionality
  workText.addEventListener("click", (e) => {
    e.preventDefault();
    categoryPicker("Work");
  });

  // Work delete functionality
  workDelete.addEventListener("click", (e) => {
    e.preventDefault();
    deleteCategory("Work");
  });

  // Health
  const health = document.createElement("div");
  dropdownList.appendChild(health);
  health.classList.add("category-div");

  // Health text
  const healthText = document.createElement("h4");
  health.appendChild(healthText);
  healthText.classList.add("category-text");
  healthText.innerText = "Health";

  // Health delete button
  const healthDelete = document.createElement("img");
  health.appendChild(healthDelete);
  healthDelete.src = deleteIcon;
  healthDelete.classList.add("delete-category-btn");

  // Health functionality
  healthText.addEventListener("click", (e) => {
    e.preventDefault();
    categoryPicker("Health");
  });

  // Health delete functionality
  healthDelete.addEventListener("click", (e) => {
    e.preventDefault();
    deleteCategory("Health");
  });

  */
};

export { addDefaultCategoryDisplay };
