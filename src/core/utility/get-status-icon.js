/* Below is the code for the Get Status Icon function */
import BackLog from "../../assets/images/svg/Backlog";
import Cancelled from "../../assets/images/svg/Cancelled";
import Done from "../../assets/images/svg/Done";
import InProgress from "../../assets/images/svg/in-progress";
import TodoIcon from "../../assets/images/svg/to-do";
import groupValueEnum from "../dictionary/group-value-enum";

const mapGroupStatusIcon = (keyName) => {
  switch (keyName) {
    case groupValueEnum.todo:
      return <TodoIcon />;
    case groupValueEnum.inProgress:
      return <InProgress />;
    case groupValueEnum.backLog:
      return <BackLog />;
    case groupValueEnum.cancelled:
      return <Cancelled />;
    case groupValueEnum.done:
      return <Done />;
    default:
      return keyName;
  }
};
export default mapGroupStatusIcon;
/* End of the above code */
