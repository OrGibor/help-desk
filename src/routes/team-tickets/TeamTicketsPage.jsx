import TicketsList from "./TicketsList";
import TicketsTabs from "./TicketsTabs";
import { useState } from "react";

const ticketList = [
  {
    id: 1,
    urgency: 3,
    status: "pending",
    title: "לא עובד לי האווטלוק",
    subtitle: "לא מקבל אימילים",
    dateTime: "11.11.2011 15:11",
  },
  {
    id: 2,
    urgency: 2.5,
    status: "progress",
    title: "לא עובד לי האווטלוק",
    subtitle: "לא מקבל אימילים",
    dateTime: "11.11.2011 15:11",
  },
  {
    id: 3,
    urgency: 2,
    status: "done",
    title: "לא עובד לי האווטלוק",
    subtitle: "לא מקבל אימילים",
    dateTime: "11.11.2011 15:11",
  },
  {
    id: 4,
    urgency: 4.5,
    status: "progress",
    title: "לא עובד לי האווטלוק",
    subtitle: "לא מקבל אימילים",
    dateTime: "11.11.2011 15:11",
  },
];

const filterStates = [
  {
    id: 1,
    displayName: "פניות פתוחות",
    filterFunction: (tickets) =>
      tickets.filter(({ status }) => status !== "done"),
  },
  {
    id: 2,
    displayName: "פניות סגורות",
    filterFunction: (tickets) =>
      tickets.filter(({ status }) => status === "done"),
  },
  {
    id: 3,
    displayName: "כל הפניות",
    filterFunction: (tickets) => tickets,
  },
];

export const TeamTicketsPage = () => {
  const [currentStateIndex, setCurrentStateIndex] = useState(0);
  const currentState = filterStates[currentStateIndex];

  return (
    <div>
      <TicketsTabs
        tabs={filterStates}
        currentStateIndex={currentStateIndex}
        setCurrentStateIndex={setCurrentStateIndex}
      />
      <TicketsList ticketList={currentState.filterFunction(ticketList)} />
    </div>
  );
};
