import groupEnum from "../../../core/dictionary/group-enum";
import mapGroupStatusIcon from "../../../core/utility/get-status-icon";
import mapPriorityIcon from "../../../core/utility/map-priority-icon";
import UserIcon from "../user-icon/user-icon";
import "./initial-kanban-header-icon.css";
function InitialKanbanHeaderIcon({ keyName, groupValue, activeUsersObj }) {
  const mapInitialKanbanHeaderIcon = () => {
    switch (groupValue) {
      case groupEnum.status:
        return mapGroupStatusIcon(keyName);
      case groupEnum.user:
        return (
          <UserIcon
            keyName={keyName}
            activeUsersObj={activeUsersObj}
          ></UserIcon>
        );
      case groupEnum.priority:
        return mapPriorityIcon(keyName);
      default:
        return keyName;
    }
  };
  return (
    <div className="initial-kanban-header-icon">
      {mapInitialKanbanHeaderIcon()}
    </div>
  );
}

export default InitialKanbanHeaderIcon;
