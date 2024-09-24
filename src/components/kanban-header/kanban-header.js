import DisplayIcon from "../../assets/images/svg/Display";
import KanbanDropDown from "../design/kanban-header-dropdown/kanban-header-dropdown";
import "./kanban-header.css";

function KanbanHeader() {
  return (
    <div className="header column-spacing">
      <KanbanDropDown
        initialIcon={<DisplayIcon />}
        btnName="Display"
      />
    </div>
  );
}

export default KanbanHeader;
