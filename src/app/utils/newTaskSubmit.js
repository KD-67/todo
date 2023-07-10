import { taskFactory } from "./taskFactory";
import { pushMasterList } from "./pushMasterList";

const newTaskSubmit = (name, description, due, priority, category) => {
  // create new task object
  const newTask = taskFactory(name, description, due, priority, category);

  // Add new task to the master list array
  pushMasterList(newTask);
};

export { newTaskSubmit };
