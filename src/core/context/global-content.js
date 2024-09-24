import React, { createContext, useEffect, useRef, useState } from "react";
import groupEnum from "../dictionary/group-enum";
import orderEnum from "../dictionary/order-enum";
import groupTicketsByProperty from "../utility/group-tickets-by-property";
import LocalStorageService from "../services/localStorage.service";
import getRandomColor from "../utility/get-random-color";
import getInitials from "../utility/get-initials";

// Create the context
const GlobalDataContext = createContext();

// Create a provider component
export const GlobalDataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [mainTicketData, setMainTicketData] = useState(null);
  const [displayData, setDisplayData] = useState(null);
  const [groupValue, setGroupValue] = useState(null);
  const [orderValue, setOrderValue] = useState(null);
  const prevGroupValue = useRef(groupValue);
  const prevOrderValue = useRef(orderValue);
  useEffect(() => {
    const kanbanData = LocalStorageService.getKanbanBoardData();
    if (!!kanbanData && Object.keys(kanbanData).length > 0) {
      setOrderValue(kanbanData.orderValue);
      setGroupValue(kanbanData.groupValue);
      setMainTicketData(kanbanData.mainTicketData);
      setUserData(kanbanData.userData);
      setDisplayData(
        groupTicketsByProperty(
          kanbanData.mainTicketData,
          kanbanData.groupValue,
          kanbanData.orderValue
        )
      );
      setLoading(false);
    } else {
      fetchData();
    }
  }, []);
  //   Below code is used to fetch data from the Backend API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const displayDataObj = groupTicketsByProperty(
        data.tickets,
        groupEnum.status,
        orderEnum.priority
      );
      setOrderValue(orderEnum.priority);
      setGroupValue(groupEnum.status);
      setMainTicketData(data.tickets);
      for (let user of data.users) {
        user.initials = getInitials(user);
        user.color = getRandomColor();
      }
      setUserData(data.users);
      setDisplayData(displayDataObj);
      const kanbanData = {
        groupValue: groupEnum.status,
        orderValue: orderEnum.priority,
        userData: data.users,
        mainTicketData: data.tickets,
      };
      LocalStorageService.setKanbanBoardData(kanbanData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  // End of the above code
  //   Below is the code for when user change the group Value
  useEffect(() => {
    if (
      !!mainTicketData &&
      (prevGroupValue.current !== groupValue ||
        prevOrderValue.current !== orderValue)
    ) {
      setLoading(true);
      const displayDataObj = groupTicketsByProperty(
        mainTicketData,
        groupValue,
        orderValue
      );
      const kanbanData = LocalStorageService.getKanbanBoardData();
      if (!!kanbanData && Object.keys(kanbanData).length > 0) {
        kanbanData.groupValue = groupValue;
        kanbanData.orderValue = orderValue;
        LocalStorageService.setKanbanBoardData(kanbanData);
      }
      setDisplayData(displayDataObj);
      setTimeout(() => {
        setLoading(false);
      }, 100);

      // Update the previous values
      prevGroupValue.current = groupValue;
      prevOrderValue.current = orderValue;
    }
  }, [
    groupValue,
    orderValue,
    mainTicketData,
    userData,
    setGroupValue,
    setOrderValue,
  ]);
  //   End of the above code
  return (
    // Provide the theme value and toggle function to child components
    <GlobalDataContext.Provider
      value={{
        loading,
        error,
        userData,
        mainTicketData,
        displayData,
        groupValue,
        orderValue,
        setGroupValue,
        setOrderValue,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataContext;
