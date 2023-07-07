import { newTaskSubmit } from "./newTaskSubmit";
import { throwNoNameError } from "./throwNoNameError";

const loadNewTaskForm = () => {
  const newTaskContainer = document.querySelector(".new-task-container");

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
  name.required = true;

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
  priority.setAttribute("name", "priority-input");

  // Priority dropdown menu options
  const low = document.createElement("option");
  priority.appendChild(low);
  low.setAttribute("value", "low");
  low.innerText = "Low";

  const medium = document.createElement("option");
  priority.appendChild(medium);
  medium.setAttribute("value", "medium");
  medium.innerText = "Medium";

  const high = document.createElement("option");
  priority.appendChild(high);
  high.setAttribute("value", "high");
  high.innerText = "High";

  // Catergory container
  const categoryContainer = document.createElement("div");
  categoryContainer.classList.add("category-container");
  newTaskForm.appendChild(categoryContainer);

  // Category label
  const categoryLabel = document.createElement("label");
  categoryContainer.appendChild(categoryLabel);
  categoryLabel.classList.add("new-task-input-label");
  categoryLabel.htmlFor = "category-input";
  categoryLabel.innerText = "Category:";

  // Category input (datalist)
  const category = document.createElement("input");
  categoryContainer.appendChild(category);
  category.classList.add("new-task");
  category.setAttribute("id", "category-input");
  category.setAttribute("type", "text");
  category.setAttribute("list", "categories");
  category.setAttribute("name", "category-input");
  category.setAttribute("placeholder", "Select or add new");

  // Category datalist
  const categoryDatalist = document.createElement("datalist");
  newTaskForm.appendChild(categoryDatalist);
  categoryDatalist.setAttribute("id", "categories");

  // Category options: home
  const home = document.createElement("option");
  categoryDatalist.appendChild(home);
  home.setAttribute("value", "Home");

  // Category options: work
  const work = document.createElement("option");
  categoryDatalist.appendChild(work);
  work.setAttribute("value", "Work");

  // Category options: health
  const health = document.createElement("option");
  categoryDatalist.appendChild(health);
  health.setAttribute("value", "Health");

  // Sumbit button
  const submit = document.createElement("button");
  newTaskForm.appendChild(submit);
  submit.classList.add("new-task-form-submit-btn");
  submit.setAttribute("type", "submit");
  submit.innerText = "Submit";

  // Submit button functionality
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value) {
      newTaskSubmit(
        name.value,
        description.value,
        due.value,
        priority.value,
        category.value
      );
      while (newTaskContainer.firstChild) {
        newTaskContainer.removeChild(newTaskContainer.firstChild);
      }
    } else if (!name.value && newTaskContainer.childNodes.length > 1) {
      return;
    } else {
      throwNoNameError();
    }
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
    while (newTaskContainer.firstChild) {
      newTaskContainer.removeChild(newTaskContainer.firstChild);
    }
  });
};

export { loadNewTaskForm };
