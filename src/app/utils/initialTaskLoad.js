import { masterListArray } from "./masterListArray";

const initialTaskLoad = (name, description, priority, category) => {
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

  // Priority
  const taskPriority = document.createElement("p");
  card.appendChild(taskPriority);
  taskPriority.innerText = "Priority: " + priority;

  // Category
  const taskCategory = document.createElement("p");
  card.appendChild(taskCategory);
  if (category) {
    taskCategory.innerText = "Category: " + category;
  }

  // Completed Button
  const completedBtn = document.createElement("button");
  card.appendChild(completedBtn);
  completedBtn.classList.add("completed-btn");
  completedBtn.innerText = "Done";

  // Completed button functionality
  completedBtn.addEventListener("click", (e) => {
    e.preventDefault();
    taskList.removeChild(task);
    let taskIndex = masterListArray.indexOf(task);
    masterListArray.splice(taskIndex, 1);

    // Save updated data to local storage
    saveToLocalStorage({
      categoryList: categoryListArray,
      taskList: masterListArray,
    });
  });
};

export { initialTaskLoad };
