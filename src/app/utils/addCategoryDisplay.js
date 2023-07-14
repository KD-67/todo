import { categoryListArray } from "./categoryListArray";
import { addCategoryToDropDownList } from "./addCategoryToDropdownList";

const addCategoryDisplay = () => {
  categoryListArray.forEach((category) => addCategoryToDropDownList(category));
};

export { addCategoryDisplay };
