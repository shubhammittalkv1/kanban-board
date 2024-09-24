// This service is used for getting and setting the data on the localstorage
const LocalStorageService = (function () {
    // Below method is used to set the kanban board data to the localstorage 
    function _setKanbanBoardData(data) {
        localStorage.setItem('kanbanData', JSON.stringify(data));
    }
    // End of the above code

    // Below code is used for getting the current state data from the localstorage
    function _getKanbanBoardData() {
        let kanbanData = [];
        const storedData = localStorage.getItem("kanbanData");
        if (storedData) {
            kanbanData = JSON.parse(storedData);
        }
        return kanbanData;
    }
    // End of the above code

    return {
        setKanbanBoardData: _setKanbanBoardData,
        getKanbanBoardData: _getKanbanBoardData
    };
})();

export default LocalStorageService;
