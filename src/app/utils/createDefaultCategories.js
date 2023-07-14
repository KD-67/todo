import { pushCategoryList } from "./pushCategoryList";

const createDefaultCategories = () => {
  pushCategoryList("Home");
  pushCategoryList("Work");
  pushCategoryList("Health");
};

export { createDefaultCategories };
