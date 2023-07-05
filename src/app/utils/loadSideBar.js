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
  // Title
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

  // Tomorrow
  const tomorrow = document.createElement("li");
  categoryList.appendChild(tomorrow);
  tomorrow.classList.add("category");
  tomorrow.innerText = "Tomorrow";

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

  // Work
  const work = document.createElement("li");
  personalList.appendChild(work);
  work.classList.add("category");
  work.innerText = "Work";

  // Health
  const health = document.createElement("li");
  personalList.appendChild(health);
  health.classList.add("category");
  health.innerText = "Health";
};

export { loadSideBar };