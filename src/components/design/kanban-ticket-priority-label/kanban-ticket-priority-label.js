import mapPriorityIcon from "../../../core/utility/map-priority-icon";
import "./kanban-ticket-priority-label.css";
function KanbanTicketPriorityLabel({ priority }) {
  return <div className="priority-label-container">
    {mapPriorityIcon(priority)}
    </div>
}
export default KanbanTicketPriorityLabel;
