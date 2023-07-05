const loadNewTaskForm = () => {
  const taskContainer = document.querySelector(".task-container");

  // "add new task" form
  const newTaskForm = document.createElement("form");
  taskContainer.appendChild(newTaskForm);
  newTaskForm.classList.add("new-task-list");

  // Form elements:

  // Title container
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("input-container");
  taskContainer.appendChild(titleContainer);

  // Title label
  const titleLabel = document.createElement("label");
  titleContainer.appendChild(titleLabel);
  titleLabel.classList.add("new-task-input-label");
  titleLabel.htmlFor = "title-input";
  titleLabel.innerText = "Task name:";

  // Title input
  const title = document.createElement("input");
  titleContainer.appendChild(title);
  title.classList.add("new-task");
  title.setAttribute("id", "title-input");
  title.setAttribute("type", "text");
  title.setAttribute("name", "title-input");
  title.setAttribute("placeholder", "Task name");

  // Description container
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("input-container");
  taskContainer.appendChild(descriptionContainer);

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
  titleContainer.classList.add("due-container");
  taskContainer.appendChild(dueContainer);

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
  taskContainer.appendChild(priorityContainer);

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
  title.setAttribute("name", "priority-input");

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
  taskContainer.appendChild(submit);
  submit.classList.add("new-task-form-submit-btn");
  submit.setAttribute("type", "submit");
  submit.innerText = "Submit";

  // Cancel button
  const cancel = document.createElement("button");
  taskContainer.appendChild(cancel);
  cancel.classList.add("new-task-form-cancel-btn");
  cancel.setAttribute("type", "button");
  cancel.innerText = "Cancel";
};

export { loadNewTaskForm };
