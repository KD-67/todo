import { categoryPicker } from "./categoryPicker";
import { deleteCategory } from "./deleteCategory";
import deleteIcon from "./media/delete.png";

const addCategoryToDropDownList = (category) => {
  const dropdownList = document.querySelector(".dropdown-list");

  // Container / .category-div
  const container = document.createElement("div");
  dropdownList.appendChild(container);
  container.classList.add("category-div");

  // Text
  const text = document.createElement("h4");
  container.appendChild(text);
  text.classList.add("category-text");
  text.innerText = category;

  // Delete button
  const categoryDelete = document.createElement("img");
  container.appendChild(categoryDelete);
  categoryDelete.src = deleteIcon;
  categoryDelete.classList.add("delete-category-btn");

  // Btn functionality
  text.addEventListener("click", (e) => {
    e.preventDefault();
    categoryPicker(category);
  });

  // Delete functionality
  categoryDelete.addEventListener("click", (e) => {
    e.preventDefault();
    deleteCategory(category);
  });
};

export { addCategoryToDropDownList };
