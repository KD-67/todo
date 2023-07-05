const newTaskSubmit = () => {
  const taskListContainer = document.querySelector(".task-list-container");

  // Task list (ul)
  const taskList = document.createElement("ul");
  taskListContainer.appendChild(taskList);
  taskList.classList.add("task-list");

  // Tasks (li)
  const task = document.createElement("li");
  taskList.appendChild(task);
  task.classList.add("task");
  task.innerText = "this is an example task";
};

export { newTaskSubmit };
