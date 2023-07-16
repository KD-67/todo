import { categoryListArray } from "./categoryListArray";
import { masterListArray } from "./masterListArray";
import { loadMasterList } from "./loadMasterList";
import { addCategoryToDropDownList } from "./addCategoryToDropdownList";
import { saveToLocalStorage } from "./saveToLocalStorage";

const deleteCategory = (category) => {
  const categoryDisplay = document.querySelector(".category-display");
  const mainTitle = document.querySelector(".main-title");

  // Remove category from categoryListArray
  const categoryIndex = categoryListArray.indexOf(category);
  categoryListArray.splice(categoryIndex, 1);

  // Update DOM (dropdown list)
  const dropdownList = document.querySelector(".dropdown-list");

  while (dropdownList.firstChild) {
    dropdownList.removeChild(dropdownList.firstChild);
  }

  categoryListArray.forEach((category) => addCategoryToDropDownList(category));

  // Remove deleted category from all tasks with that category
  const tasksToRemove = masterListArray.filter(
    (task) => task.category === category
  );
  tasksToRemove.forEach((task) => {
    const taskIndex = masterListArray.indexOf(task);
    masterListArray.splice(taskIndex, 1);
  });

  // Refresh DOM
  if (
    (categoryDisplay && categoryDisplay.innerText === category) ||
    (mainTitle && mainTitle.innerText === "Master List")
  ) {
    loadMasterList();
  }

  // Save updated data to local storage
  saveToLocalStorage({
    categoryList: categoryListArray,
    taskList: masterListArray,
  });
};

export { deleteCategory };
