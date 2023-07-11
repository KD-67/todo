import { categoryPicker } from "./categoryPicker";
import { deleteCategory } from "./deleteCategory";
import deleteIcon from "./media/delete.png";

const addNewCategory = (category) => {
  const dropdownList = document.querySelector(".dropdown-list");

  // New category div container list item
  const newCategoryDiv = document.createElement("div");
  dropdownList.appendChild(newCategoryDiv);
  newCategoryDiv.classList.add("category-div");

  // New category text
  const newCategoryText = document.createElement("h4");
  newCategoryDiv.appendChild(newCategoryText);
  newCategoryText.classList.add("category-text");
  newCategoryText.innerText = category;

  // New category delete icon
  const newCategoryDelete = document.createElement("img");
  newCategoryDiv.appendChild(newCategoryDelete);
  newCategoryDelete.src = deleteIcon;
  newCategoryDelete.classList.add("delete-category-btn");

  // new category button functionality
  newCategoryText.addEventListener("click", (e) => {
    e.preventDefault();
    categoryPicker(category);
  });

  // New category delete functionality
  newCategoryDelete.addEventListener("click", (e) => {
    e.preventDefault();
    deleteCategory(category);
  });
};

export { addNewCategory };
