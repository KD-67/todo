const removeCategoryFromTask = (task, category) => {
  if (task.category === category) {
    task.category = null;
  }
};

export { removeCategoryFromTask };
