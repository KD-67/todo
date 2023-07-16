import "./main.css";
import { loadHeaderBar } from "./app/utils/loadHeaderBar";
import { loadAddNewTaskBtn } from "./app/utils/loadAddNewTaskBtn";
import { loadMainTitle } from "./app/utils/loadMainHeading";
import { loadSideBar } from "./app/utils/loadSideBar";
import { checkLocalStorage } from "./app/utils/checkLocalStorage";
import { loadMasterList } from "./app/utils/loadMasterList";

checkLocalStorage();
loadHeaderBar();
loadSideBar();
loadMainTitle();
loadAddNewTaskBtn();
loadMasterList();
