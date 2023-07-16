import { taskFactory } from "./taskFactory";
import { pushMasterList } from "./pushMasterList";
import { initialTaskLoad } from "./initialTaskLoad";
import { saveToLocalStorage } from "./saveToLocalStorage";
import { categoryListArray } from "./categoryListArray";
import { masterListArray } from "./masterListArray";

const newTaskSubmit = (name, description, due, priority, category) => {
  const categoryDisplay = document.querySelector(".category-display");
  const mainTitle = document.querySelector(".main-title");
  const categoryDate = document.querySelector(".category-date");

  // create new task object
  const newTask = taskFactory(name, description, due, priority, category);

  // Add new task to the master list array
  pushMasterList(newTask);

  // Initial task load to DOM (if fits in active category)
  if (categoryDisplay && categoryDisplay.innerText === category) {
    initialTaskLoad(name, description, priority, category);
  } else if (categoryDate && categoryDate.innerText === due) {
    initialTaskLoad(name, description, priority, category);
  } else if (mainTitle && mainTitle.innerText == "Master List") {
    initialTaskLoad(name, description, priority, category);
  }

  // Save updated data to local storage
  saveToLocalStorage({
    categoryList: categoryListArray,
    taskList: masterListArray,
  });
};

export { newTaskSubmit };
