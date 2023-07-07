const taskFactory = (name, description, due, priority) => {
  return {
    name,
    description,
    due,
    priority,
  };
};

export { taskFactory };
