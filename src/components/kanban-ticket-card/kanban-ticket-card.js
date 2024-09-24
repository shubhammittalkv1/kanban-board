import { useContext } from "react";
import UserIcon from "../design/user-icon/user-icon";
import "./kanban-ticket-card.css";
import GlobalDataContext from "../../core/context/global-content";
import mapActiveUsers from "../../core/utility/map-active-users";
import mapGroupStatusIcon from "../../core/utility/get-status-icon";
import KanbanTicketPriorityLabel from "../design/kanban-ticket-priority-label/kanban-ticket-priority-label";
import FeatureRequestLabel from "../design/feature-request-label/feature-request-label";
import groupEnum from "../../core/dictionary/group-enum";
import getTurncareText from "../../core/utility/get-turncate-text";
function KanboanTicketCard({ key, ticket }) {
  const { userData, groupValue } = useContext(GlobalDataContext);
// elow code is used to convert Array of Object into Object with key as user id and value as Object containing name ,color and initials
  const activeUsersObj = mapActiveUsers(userData);
// End of the above code
  return (
    <div className="kanban-board-ticket-card">
      <div className="kanban-board-ticket-card-header">
        <p className="kanban-board-ticket-card-id"> {ticket.id} </p>
        <UserIcon
          keyName={ticket.userId}
          activeUsersObj={activeUsersObj}
        ></UserIcon>
      </div>
      <div className="kanban-board-ticket-card-body">
        {groupValue !== groupEnum.status && (
          <span>{mapGroupStatusIcon(ticket.status)}</span>
        )}
        <p className="kanban-board-ticket-card-title"> {getTurncareText(ticket.title, 80)} </p>
      </div>
      <div className="kanban-board-ticket-card-footer">
        <span className="kanban-board-ticket-card-priority">
          <KanbanTicketPriorityLabel priority={ticket.priority + ""} />
        </span>
        {ticket.tag.includes("Feature Request") === true && (
          <FeatureRequestLabel />
        )}
      </div>
    </div>
  );
}

export default KanboanTicketCard;
