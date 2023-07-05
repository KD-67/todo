const newTaskSubmit = (name, description, due, priority) => {
  const taskListContainer = document.querySelector(".task-list-container");

  // Task list (ul)
  const taskList = document.createElement("ul");
  taskListContainer.appendChild(taskList);
  taskList.classList.add("task-list");

  // Tasks (li)
  const task = document.createElement("li");
  taskList.appendChild(task);
  task.classList.add("task");

  // Task card
  const card = document.createElement("div");
  task.appendChild(card);
  card.classList.add("card");

  // Card info
  // Name
  const taskName = document.createElement("h4");
  card.appendChild(taskName);
  taskName.innerText = name;

  // Description
  const taskDescription = document.createElement("p");
  card.appendChild(taskDescription);
  taskDescription.innerText = description;

  // Due Date
  const taskDue = document.createElement("p");
  card.appendChild(taskDue);
  taskDue.innerText = "Due date: " + due;

  // Priority
  const taskPriority = document.createElement("p");
  card.appendChild(taskPriority);
  taskPriority.innerText = "Priority: " + priority;

  // Completed Button
  const completedBtn = document.createElement("button");
  card.appendChild(completedBtn);
  completedBtn.classList.add("completed-btn");
  completedBtn.innerText = "Done";

  // Completed button functionality
  completedBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taskList.removeChild(task);
  });
};

export { newTaskSubmit };
