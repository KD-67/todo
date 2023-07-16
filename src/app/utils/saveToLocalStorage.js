import { activeDisplay } from "./activeDisplayArray";
import { categoryListArray } from "./categoryListArray";
import { masterListArray } from "./masterListArray";

const saveToLocalStorage = () => {
  const data = {
    categoryList: categoryListArray,
    taskList: masterListArray,
  };

  localStorage.setItem("siteData", JSON.stringify(data));
};

export { saveToLocalStorage };
