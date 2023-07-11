import { categoryPicker } from "./categoryPicker";

const addNewCategory = (category) => {
  const dropdownList = document.querySelector(".dropdown-list");

  const newCategory = document.createElement("a");
  dropdownList.appendChild(newCategory);
  newCategory.classList.add("category");
  newCategory.innerText = category;

  newCategory.addEventListener("click", (e) => {
    e.preventDefault();
    categoryPicker(category);
  });
};

export { addNewCategory };
