const addNewCategory = (category) => {
  const categoryDrop = document.querySelector(".category-drop");

  const newCategory = document.createElement("option");
  categoryDrop.appendChild(newCategory);
  newCategory.classList.add("category");
  newCategory.innerText = category;
  console.log("made a new category");
};

export { addNewCategory };
