/* Below is the code for the Group Tickets By Property function */
const groupTicketsByProperty = (tickets, groupProperty, orderEnum) => {
  const groupedTickets = tickets.reduce((result, ticket) => {
    if (!result[ticket[groupProperty]]) {
      console.log("The ticket[groupProperty] in the groupTicketsByProperty is: ", ticket[groupProperty], groupProperty);
      result[ticket[groupProperty]] = [];
    }
    result[ticket[groupProperty]].push(ticket);
    console.log("The result in the groupTicketsByProperty is: ", result);
    return result;
  }, {});
  // Sort tickets within each group if orderEnum is provided
  if (orderEnum) {
    Object.keys(groupedTickets).forEach(key => {
      groupedTickets[key].sort((a, b) => {
        if (typeof(a[orderEnum]) === "string" && typeof(b[orderEnum]) === "string") {
          return a[orderEnum].toString().localeCompare(b[orderEnum].toString())
        } else {
          if (a[orderEnum] < b[orderEnum]) return 1;
          if (a[orderEnum] > b[orderEnum]) return -1;
          return 0;
        }
      });
    });
  }

  return groupedTickets;
}

export default groupTicketsByProperty;
/* End of the above code */