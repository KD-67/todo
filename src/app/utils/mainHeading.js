const loadMainTitle = () => {
  const mainContent = document.querySelector(".main-content");

  // Create title:
  const mainTitle = document.createElement("h2");
  mainContent.appendChild(mainTitle);
  mainTitle.classList.add("main-title");
  mainTitle.innerText = "TODAY";

  // Current date:
  const mainDate = document.createElement("h4");
  mainContent.appendChild(mainDate);
  mainDate.classList.add("main-date");
  mainDate.innerText = "5 July 2023";
};

export { loadMainTitle };
