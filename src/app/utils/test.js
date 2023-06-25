const testPage = () => {
  const content = document.querySelector(".content");

  const testDiv = document.createElement("div");
  testDiv.classList.add("test");
  content.appendChild(testDiv);
  testDiv.innerText = "ACAB";
};

export { testPage };
