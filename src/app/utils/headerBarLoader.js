import logo from "./todo-logo.png";

const loadHeaderBar = () => {
  const headerBar = document.querySelector(".header-bar");

  // LOGO CONTAINER
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");
  headerBar.appendChild(logoContainer);

  // LOGO IMAGE
  const logoImg = document.createElement("img");
  logoImg.classList.add("logo-img");
  logoImg.src = logo;
  logoImg.alt = "logo";
  logoContainer.appendChild(logoImg);

  // LOGO TEXT
  const logoText = document.createElement("h1");
  logoText.classList.add("logo-text");
  logoContainer.appendChild(logoText);
  logoText.innerText = "myTodo App";

  // BTNS CONTAINER
  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btns-container");
  headerBar.appendChild(btnsContainer);
};

export { loadHeaderBar };
