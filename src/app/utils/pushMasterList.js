import { masterListArray } from "./masterListArray";

const pushMasterList = (newTask) => {
  masterListArray.push(newTask);

  console.log(masterListArray);
};

export { pushMasterList };
