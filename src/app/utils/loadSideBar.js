import { dateListPicker } from "./dateListPicker";
import { loadMasterList } from "./masterListBtn";
import { categoryPicker } from "./categoryPicker";

const loadSideBar = () => {
  const sideBar = document.querySelector(".side-bar");

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
    console.log("test");
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
    dateListPicker("today");
  });

  // Tomorrow
  const tomorrow = document.createElement("li");
  categoryList.appendChild(tomorrow);
  tomorrow.classList.add("category");
  tomorrow.innerText = "Tomorrow";

  // Tomorrow button functionality
  tomorrow.addEventListener("click", (e) => {
    e.preventDefault();
    dateListPicker("tomorrow");
  });

  // Choose Date Container
  const chooseDateContainer = document.createElement("li");
  categoryList.appendChild(chooseDateContainer);
  chooseDateContainer.classList.add("category");
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
  personalTitle.innerText = "Categories:";

  // Home
  const home = document.createElement("li");
  personalList.appendChild(home);
  home.classList.add("category");
  home.innerText = "Home";

  // Home button functionality
  home.addEventListener("click", (e) => {
    e.preventDefault();
    categoryPicker("Home");
  });

  // Work
  const work = document.createElement("li");
  personalList.appendChild(work);
  work.classList.add("category");
  work.innerText = "Work";

  // Work button functionality
  work.addEventListener("click", (e) => {
    e.preventDefault();
    categoryPicker("Work");
  });

  // Health
  const health = document.createElement("li");
  personalList.appendChild(health);
  health.classList.add("category");
  health.innerText = "Health";

  // Health button functionality
  health.addEventListener("click", (e) => {
    e.preventDefault();
    categoryPicker("Health");
  });
};

export { loadSideBar };
