import { newTaskSubmit } from "./newTaskSubmitFunction";

const loadNewTaskForm = () => {
  const newTaskContainer = document.querySelector(".new-task-container");
  const taskListContainer = document.querySelector(".task-list-container");

  // "add new task" form
  const newTaskForm = document.createElement("form");
  newTaskContainer.appendChild(newTaskForm);
  newTaskForm.classList.add("new-task-list");

  // Form elements:

  // Name container
  const nameContainer = document.createElement("div");
  nameContainer.classList.add("input-container");
  newTaskForm.appendChild(nameContainer);

  // Name label
  const nameLabel = document.createElement("label");
  nameContainer.appendChild(nameLabel);
  nameLabel.classList.add("new-task-input-label");
  nameLabel.htmlFor = "name-input";
  nameLabel.innerText = "Task name:";

  // Name input
  const name = document.createElement("input");
  nameContainer.appendChild(name);
  name.classList.add("new-task");
  name.setAttribute("id", "name-input");
  name.setAttribute("type", "text");
  name.setAttribute("name", "name-input");
  name.setAttribute("placeholder", "Task name");

  // Description container
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("input-container");
  newTaskForm.appendChild(descriptionContainer);

  // Description label
  const descriptionLabel = document.createElement("label");
  descriptionContainer.appendChild(descriptionLabel);
  descriptionLabel.classList.add("new-task-input-label");
  descriptionLabel.htmlFor = "description-input";
  descriptionLabel.innerText = "Description:";

  // Description input
  const description = document.createElement("textarea");
  descriptionContainer.appendChild(description);
  description.classList.add("new-task");
  description.setAttribute("id", "description-input");
  description.setAttribute("name", "description-input");
  description.setAttribute("placeholder", "Description");

  // Due date container
  const dueContainer = document.createElement("div");
  dueContainer.classList.add("due-container");
  newTaskForm.appendChild(dueContainer);

  // Due date label
  const dueLabel = document.createElement("label");
  dueContainer.appendChild(dueLabel);
  dueLabel.classList.add("new-task-input-label");
  dueLabel.htmlFor = "due-input";
  dueLabel.innerText = "Due date:";

  // Due date input
  const due = document.createElement("input");
  dueContainer.appendChild(due);
  due.classList.add("new-task");
  due.setAttribute("id", "due-input");
  due.setAttribute("type", "date");
  due.setAttribute("name", "due-input");

  // Priority container
  const priorityContainer = document.createElement("div");
  priorityContainer.classList.add("priority-container");
  newTaskForm.appendChild(priorityContainer);

  // Priority label
  const priorityLabel = document.createElement("label");
  priorityContainer.appendChild(priorityLabel);
  priorityLabel.classList.add("new-task-input-label");
  priorityLabel.htmlFor = "priority-input";
  priorityLabel.innerText = "Priority:";

  // Priority input
  const priority = document.createElement("select");
  priorityContainer.appendChild(priority);
  priority.classList.add("new-task");
  priority.setAttribute("id", "priority-input");
  priority.setAttribute("type", "date");
  priority.setAttribute("name", "priority-input");

  // Priority dropdown menu options
  const high = document.createElement("option");
  priority.appendChild(high);
  high.setAttribute("value", "high");
  high.innerText = "High";

  const medium = document.createElement("option");
  priority.appendChild(medium);
  medium.setAttribute("value", "medium");
  medium.innerText = "Medium";

  const low = document.createElement("option");
  priority.appendChild(low);
  low.setAttribute("value", "low");
  low.innerText = "Low";

  // Sumbit button
  const submit = document.createElement("button");
  newTaskForm.appendChild(submit);
  submit.classList.add("new-task-form-submit-btn");
  submit.setAttribute("type", "submit");
  submit.innerText = "Submit";

  // Submit button functionality
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    newTaskSubmit(name.value, description.value, due.value, priority.value);
    newTaskContainer.removeChild(newTaskForm);
  });

  // Cancel button
  const cancel = document.createElement("button");
  newTaskForm.appendChild(cancel);
  cancel.classList.add("new-task-form-cancel-btn");
  cancel.setAttribute("type", "button");
  cancel.innerText = "Cancel";

  // Cancel button functionality
  cancel.addEventListener("click", (e) => {
    e.preventDefault();
    newTaskContainer.removeChild(newTaskForm);
  });
};

export { loadNewTaskForm };
