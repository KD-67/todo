import { taskFactory } from "./taskFactory";
import { pushMasterList } from "./pushMasterList";
import { initialTaskLoad } from "./initialTaskLoad";

const newTaskSubmit = (name, description, due, priority, category) => {
  const categoryDisplay = document.querySelector(".category-display");

  // create new task object
  const newTask = taskFactory(name, description, due, priority, category);

  // Add new task to the master list array
  pushMasterList(newTask);

  // Initial task load to DOM (if fits in active category)
  if (categoryDisplay && categoryDisplay.innerText === category) {
    initialTaskLoad(name, description, priority, category);
  }
};

export { newTaskSubmit };
