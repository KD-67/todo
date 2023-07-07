import logo from "./media/todo-logo.png";
import userImg from "./media/rat.png";

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

  // SIGN UP BTN
  const signupBtn = document.createElement("div");
  signupBtn.classList.add("header-btn");
  btnsContainer.appendChild(signupBtn);
  signupBtn.innerText = "SIGN UP";

  // LOG IN BTN
  const loginBtn = document.createElement("div");
  loginBtn.classList.add("header-btn");
  btnsContainer.appendChild(loginBtn);
  loginBtn.innerText = "LOG IN";

  // USER PROFILE PIC CONTAINER
  const profilePicContainer = document.createElement("div");
  profilePicContainer.classList.add("profile-pic-container");
  btnsContainer.appendChild(profilePicContainer);

  // USER PROFILE PIC IMG
  const profileImg = document.createElement("img");
  profileImg.src = userImg;
  profileImg.alt = "profile picture";
  profileImg.classList.add("profile-img");
  profilePicContainer.appendChild(profileImg);
};

export { loadHeaderBar };
