import "./main.css";
import { loadHeaderBar } from "./app/utils/loadHeaderBar";
import { loadAddNewTaskBtn } from "./app/utils/loadAddNewTaskBtn";
import { loadMainTitle } from "./app/utils/loadMainHeading";
import { loadSideBar } from "./app/utils/loadSideBar";
import { createDefaultCategories } from "./app/utils/createDefaultCategories";

createDefaultCategories();
loadHeaderBar();
loadSideBar();
loadMainTitle();
loadAddNewTaskBtn();
