// Below Component is the Parent Component which have all the necessary Child Components
import { useContext } from "react";
import "./kanban-board.css";
import KanbanHeader from "../kanban-header/kanban-header";
import KanbanColumnHeader from "../kanban-column-header/kanban-column-header";
import GlobalDataContext from "../../core/context/global-content";
import { MoonLoader } from "react-spinners";
import KanboanTicketCard from "../kanban-ticket-card/kanban-ticket-card";

function KanbanBoard() {
  const { loading, error, displayData } = useContext(GlobalDataContext);
//   Below code is used to Handle the Error
  if (error) return <div>Error: {error.message}</div>;
//   End of the above code
  return (
    <div className="container">
      <KanbanHeader />
      {true || loading !== true ? (
        <div className="column-wrapper">
          <div className="column-container">
            {displayData &&
              Object.entries(displayData).map(([key, value]) => (
                <div className="column-item" key={key}>
                  <KanbanColumnHeader keyName={key} length={value.length} />
                  {value.map((ticket) => (
                    <span key={ticket.id}><KanboanTicketCard key={ticket.id} ticket={ticket} /></span>
                  ))}
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="loader-container">
          <MoonLoader size={54} />
        </div>
      )}
    </div>
  );
}

export default KanbanBoard;
