import { categoryListArray } from "./categoryListArray";
import { masterListArray } from "./masterListArray";
import { removeCategoryFromTask } from "./removeCategoryFromTask";
import { loadMasterList } from "./loadMasterList";
import { addCategoryToDropDownList } from "./addCategoryToDropdownList";

const deleteCategory = (category) => {
  const categoryDisplay = document.querySelector(".category-display");
  const mainTitle = document.querySelector(".main-title");

  // Remove category
  console.log("old array: " + categoryListArray);
  let listIndex = categoryListArray.indexOf(category);
  categoryListArray.splice(listIndex, 1);
  console.log("new array: " + categoryListArray);

  // Update DOM
  const dropdownList = document.querySelector(".dropdown-list");

  while (dropdownList.firstChild) {
    dropdownList.removeChild(dropdownList.firstChild);
  }

  categoryListArray.forEach((category) => addCategoryToDropDownList(category));

  // Remove deleted category from all tasks with that category
  masterListArray.forEach((task) => removeCategoryFromTask(task, category));

  // Refresh DOM
  if (
    (categoryDisplay && categoryDisplay.innerText == category) ||
    (mainTitle && mainTitle.innerText == "Master List")
  ) {
    loadMasterList();
  }
};

export { deleteCategory };
