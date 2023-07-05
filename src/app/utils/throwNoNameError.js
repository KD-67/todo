const throwNoNameError = () => {
  const newTaskContainer = document.querySelector(".new-task-container");

  const errorMessage = document.createElement("h4");
  newTaskContainer.prepend(errorMessage);
  errorMessage.classList.add("no-name-error-message");
  errorMessage.innerText = "Please provide a name for your task";
};

export { throwNoNameError };
