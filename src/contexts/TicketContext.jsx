import { createContext, useContext, useState } from 'react';
import defaultTickets from './default-tickets';

const TicketsContext = createContext(null);

export const TicketsProvider = ({children}) => {
  const [tickets, setTickets] = useState(defaultTickets);

  return (
    <TicketsContext.Provider value={{tickets}}>
      {children}
    </TicketsContext.Provider>
  )
}

export const useTickets = () => {
  const ticketsContext = useContext(TicketsContext);

  if (!ticketsContext) {
    throw new Error('App is not wrapped by TicketsProvider.');
  }

  return ticketsContext;
}