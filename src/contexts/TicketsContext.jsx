import { createContext, useContext, useState } from 'react';

const defaultTickets = [
  {
    id: 1,
    urgency: 3,
    status: "pending",
    title: "לא עובד לי עק",
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

const TicketsContext = createContext(null);

export const TicketsProvider = ({children}) => {
  const [tickets] = useState(defaultTickets);

  return (
    <TicketsContext.Provider value={{tickets}}>
      {children}
    </TicketsContext.Provider>
  );
}

export const useTicketsContext = () => {
  const context = useContext(TicketsContext);

  if (context === null) {
    throw new Error('App need to be wrapped with TicketsProvider.');
  }

  return context;
}