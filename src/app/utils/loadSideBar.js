import { dateListPicker } from "./dateListPicker";
import { loadMasterList } from "./masterListBtn";
import { categoryPicker } from "./categoryPicker";
import { deleteCategory } from "./deleteCategory";
import deleteIcon from "./media/delete.png";

const loadSideBar = () => {
  const sideBar = document.querySelector(".side-bar");

  // date formatting bullshit
  const d = new Date();
  const myToday = d.toISOString().split("T")[0];
  const myNextDay = new Date(d);
  myNextDay.setDate(myNextDay.getDate() + 1);
  const myTomorrow = myNextDay.toISOString().split("T")[0];

  // Category list container
  const categoryListContainer = document.createElement("div");
  sideBar.appendChild(categoryListContainer);
  categoryListContainer.classList.add("category-list-container");

  // Category list (ul)
  const categoryList = document.createElement("ul");
  categoryListContainer.appendChild(categoryList);
  categoryList.classList.add("category-list");

  // Catergories (li)

  // Master list container
  const masterListContainer = document.createElement("li");
  categoryList.appendChild(masterListContainer);
  masterListContainer.classList.add("category-title-container");

  // Master list
  const masterList = document.createElement("h3");
  masterListContainer.appendChild(masterList);
  masterList.classList.add("category-title");
  masterList.classList.add("category");
  masterList.innerText = "Full list";

  // Master list button functionality
  masterList.addEventListener("click", (e) => {
    e.preventDefault();
    loadMasterList();
  });

  // Title container
  const titleContainer = document.createElement("li");
  categoryList.appendChild(titleContainer);
  titleContainer.classList.add("category-title-container");

  // Title
  const title = document.createElement("h3");
  titleContainer.appendChild(title);
  title.classList.add("category-title");
  title.innerText = "View date:";

  // Today
  const today = document.createElement("li");
  categoryList.appendChild(today);
  today.classList.add("category");
  today.innerText = "Today";

  // Today button functionality
  today.addEventListener("click", (e) => {
    e.preventDefault();
    dateListPicker(myToday);
  });

  // Tomorrow
  const tomorrow = document.createElement("li");
  categoryList.appendChild(tomorrow);
  tomorrow.classList.add("category");
  tomorrow.innerText = "Tomorrow";

  // Tomorrow button functionality
  tomorrow.addEventListener("click", (e) => {
    e.preventDefault();
    dateListPicker(myTomorrow);
  });

  // Choose Date Container
  const chooseDateContainer = document.createElement("li");
  categoryList.appendChild(chooseDateContainer);
  chooseDateContainer.classList.add("choose-date-container");
  chooseDateContainer.innerText = "Choose date:";

  // Choose date input
  const chooseDate = document.createElement("input");
  chooseDateContainer.appendChild(chooseDate);
  chooseDate.setAttribute("type", "date");

  // Choose date button
  const chooseDateBtn = document.createElement("button");
  chooseDateContainer.appendChild(chooseDateBtn);
  chooseDateBtn.classList.add("choose-date-btn");
  chooseDateBtn.innerText = "Go";

  // Choose date button functionality
  chooseDateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (chooseDate.value) {
      dateListPicker(chooseDate.value);
    } else {
      return;
    }
  });

  // Personal Categories:
  const personalList = document.createElement("ul");
  sideBar.appendChild(personalList);
  personalList.classList.add("category-list");

  // Title
  const personalTitle = document.createElement("h3");
  personalList.appendChild(personalTitle);
  personalTitle.classList.add("category-title");

  // Dropdown container
  const categoryDropContainer = document.createElement("div");
  personalList.appendChild(categoryDropContainer);
  categoryDropContainer.classList.add("category-drop-container");

  // Dropdown button
  const dropdownBtn = document.createElement("button");
  categoryDropContainer.appendChild(dropdownBtn);
  dropdownBtn.classList.add("dropdown-btn");
  dropdownBtn.innerText = "Categories:";

  // Dropdown list
  const dropdownList = document.createElement("div");
  categoryDropContainer.appendChild(dropdownList);
  dropdownList.classList.add("dropdown-list");

  // Dropdown list options
  // Home
  const home = document.createElement("div");
  dropdownList.appendChild(home);
  home.classList.add("category-div");

  // Home text
  const homeText = document.createElement("h4");
  home.appendChild(homeText);
  homeText.classList.add("category-text");
  homeText.innerText = "Home";

  // Home delete button
  const homeDelete = document.createElement("img");
  home.appendChild(homeDelete);
  homeDelete.src = deleteIcon;
  homeDelete.classList.add("delete-category-btn");

  // Home functionality
  homeText.addEventListener("click", (e) => {
    e.preventDefault();
    categoryPicker("Home");
  });

  // Home delete functionality
  homeDelete.addEventListener("click", (e) => {
    e.preventDefault();
    deleteCategory("Home");
  });

  // Work
  const work = document.createElement("div");
  dropdownList.appendChild(work);
  work.classList.add("category-div");

  // Work text
  const workText = document.createElement("h4");
  work.appendChild(workText);
  workText.classList.add("category-text");
  workText.innerText = "Work";

  // Work delete button
  const workDelete = document.createElement("img");
  work.appendChild(workDelete);
  workDelete.src = deleteIcon;
  workDelete.classList.add("delete-category-btn");

  // Work functionality
  workText.addEventListener("click", (e) => {
    e.preventDefault();
    categoryPicker("Work");
  });

  // Work delete functionality
  workDelete.addEventListener("click", (e) => {
    e.preventDefault();
    deleteCategory("Work");
  });

  // Health
  const health = document.createElement("div");
  dropdownList.appendChild(health);
  health.classList.add("category-div");

  // Health text
  const healthText = document.createElement("h4");
  health.appendChild(healthText);
  healthText.classList.add("category-text");
  healthText.innerText = "Health";

  // Health delete button
  const healthDelete = document.createElement("img");
  health.appendChild(healthDelete);
  healthDelete.src = deleteIcon;
  healthDelete.classList.add("delete-category-btn");

  // Health functionality
  healthText.addEventListener("click", (e) => {
    e.preventDefault();
    categoryPicker("Health");
  });

  // Health delete functionality
  healthDelete.addEventListener("click", (e) => {
    e.preventDefault();
    deleteCategory("Health");
  });
};

export { loadSideBar };
