import { useContext } from "react";
import "./kanban-column-header.css";
import GlobalDataContext from "../../core/context/global-content";
import mapActiveUsers from "../../core/utility/map-active-users";
import groupEnum from "../../core/dictionary/group-enum";
import priorityEnum from "../../core/dictionary/priority-enum";
import InitialKanbanHeaderIcon from "../design/initial-kanban-header-icon/initial-kanban-header-icon";
import ThreeDotMenu from "../../assets/images/svg/3 dot menu";
import Add from "../../assets/images/svg/add";

function KanbanColumnHeader({ keyName, length }) {
  const { groupValue, userData } = useContext(GlobalDataContext);
  const activeUsersObj = mapActiveUsers(userData);
  //   Below is the code which is used to map the key Name in Kanban Board Column Header
  const mapKeyName = () => {
    switch (groupValue) {
      case groupEnum.status:
        return keyName;
      case groupEnum.user:
        return !!activeUsersObj && !!activeUsersObj[keyName]
          ? activeUsersObj[keyName].name
          : "";
      default:
        return priorityEnum[keyName];
    }
  };
  //   End of the above code
  return (
    <div className="column-header-container">
      <div className="column-header-first-section">
        <InitialKanbanHeaderIcon
          keyName={keyName}
          groupValue={groupValue}
          activeUsersObj={activeUsersObj}
        />
        <div className="column-header-title">{mapKeyName()}</div>
        <div className="column-header-length">{length}</div>
      </div>
      <div className="column-header-second-section">
        <Add />
        <ThreeDotMenu />
      </div>
    </div>
  );
}

export default KanbanColumnHeader;
