import { categoryListArray } from "./categoryListArray";

const deleteCategory = (category) => {
  console.log("old array: " + categoryListArray);
  // Remove category
  let listIndex = categoryListArray.indexOf(category);
  categoryListArray.splice(listIndex, 1);

  // Delete category div+content from DOM
  console.log("new array: " + categoryListArray);
};

export { deleteCategory };
