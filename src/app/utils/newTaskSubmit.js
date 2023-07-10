import { taskFactory } from "./taskFactory";
import { pushMasterList } from "./pushMasterList";
import { initialTaskLoad } from "./initialTaskLoad";
import { activeCategory } from "./categoryPicker";

const newTaskSubmit = (name, description, due, priority, category) => {
  const categoryDisplay = document.querySelector(".category-display");

  // create new task object
  const newTask = taskFactory(name, description, due, priority, category);

  // Add new task to the master list array
  pushMasterList(newTask);

  // Initial task load to DOM (if fits in active category)
  if (1 == 1) {
    initialTaskLoad(name, description, due, priority, category);
  }
};

export { newTaskSubmit };
