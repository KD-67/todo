import { masterListArray } from "./masterListArray";
import { activeDisplay } from "./activeDisplayArray";
import { emptyActiveDisplay } from "./emptyActiveDisplay";
import { pushActiveDisplay } from "./pushActiveDisplay";

const loadCategory = (category) => {
  const taskListContainer = document.querySelector(".task-list-container");

  // clear previous content
  if (taskListContainer.hasChildNodes) {
    while (taskListContainer.firstChild) {
      taskListContainer.removeChild(taskListContainer.firstChild);
    }
  }

  // Update activeDisplay array
  emptyActiveDisplay();
  masterListArray.forEach((task) => {
    if (task.category === category) {
      pushActiveDisplay(task);
    }
  });

  // Updates DOM
  for (let i = 0; i < masterListArray.length; i++) {
    if (masterListArray[i].category === category) {
      let taskIndex = i;

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
      taskName.innerText = masterListArray[i].name;

      // Description
      const taskDescription = document.createElement("p");
      card.appendChild(taskDescription);
      taskDescription.innerText = masterListArray[i].description;

      // Priority
      const taskPriority = document.createElement("p");
      card.appendChild(taskPriority);
      taskPriority.innerText = "Priority: " + masterListArray[i].priority;

      // Category
      const taskCategory = document.createElement("p");
      card.appendChild(taskCategory);
      if (masterListArray[i].category) {
        taskCategory.innerText = "Category: " + masterListArray[i].category;
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
        masterListArray.splice(taskIndex, 1);

        // Save updated data to local storage
        saveToLocalStorage({
          categoryList: categoryListArray,
          taskList: masterListArray,
        });
      });
    }
  }
};

export { loadCategory };
