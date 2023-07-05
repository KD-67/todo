import "./main.css";
import { loadHeaderBar } from "./app/utils/headerBarLoader";
import { loadAddNewTaskBtn } from "./app/utils/newTaskBtnLoader";
import { loadMainTitle } from "./app/utils/mainHeading";
import { loadSideBar } from "./app/utils/loadSideBar";

loadHeaderBar();
loadSideBar();
loadMainTitle();
loadAddNewTaskBtn();
