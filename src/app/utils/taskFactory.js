const taskFactory = (name, description, due, priority, category) => {
  return {
    name,
    description,
    due,
    priority,
    category
  };
};

export { taskFactory };
