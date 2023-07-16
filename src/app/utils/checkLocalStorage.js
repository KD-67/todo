import { categoryListArray } from "./categoryListArray";
import { masterListArray } from "./masterListArray";

const checkLocalStorage = () => {
  const storedData = localStorage.getItem("siteData");

  if (storedData === null || storedData === undefined) {
    // No existing data in local storage, initialize with default values or an empty state
    categoryListArray.push("Home", "Work", "Health");
    masterListArray.length = 0;
  } else {
    // Data exists in local storage, parse and assign it to data structures
    const parsedData = JSON.parse(storedData);
    categoryListArray.push(...parsedData.categoryList);
    masterListArray.push(...parsedData.taskList);
  }
};

export { checkLocalStorage };
