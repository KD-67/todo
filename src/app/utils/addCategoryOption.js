const addCategoryOption = (category) => {
  const categoryDatalist = document.querySelector(".category-datalist");

  const catOption = document.createElement("option");
  categoryDatalist.appendChild(catOption);
  catOption.setAttribute("value", category);
};

export { addCategoryOption };
