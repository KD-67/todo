import { taskFactory } from "./taskFactory";
import { pushMasterList } from "./pushMasterList";
import { loadMasterList } from "./loadMasterList";

const newTaskSubmit = (name, description, due, priority, category) => {
  const taskListContainer = document.querySelector(".task-list-container");

  // create new task object
  const newTask = taskFactory(name, description, due, priority, category);

  // Add new task to the master list array
  pushMasterList(newTask);

  //test
  loadMasterList();
};

export { newTaskSubmit };
