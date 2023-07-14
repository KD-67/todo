import { addCategoryDisplay } from "./addCategoryDisplay";
import { categoryListArray } from "./categoryListArray";

const deleteCategory = (category) => {
  // Remove category
  console.log("old array: " + categoryListArray);
  let listIndex = categoryListArray.indexOf(category);
  categoryListArray.splice(listIndex, 1);
  console.log("new array: " + categoryListArray);

  // Delete category div+content from DOM
  const dropdownList = document.querySelector(".dropdown-list");

  while (dropdownList.firstChild) {
    dropdownList.removeChild(dropdownList.firstChild);
  }

  addCategoryDisplay();
};

export { deleteCategory };
