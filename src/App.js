import "./App.css";
import KanbanBoard from "./components/kanban-board/kanban-board";
import { GlobalDataProvider } from "./core/context/global-content";

function App() {
  return (
    <GlobalDataProvider>
      <KanbanBoard />
    </GlobalDataProvider>
  );
}

export default App;