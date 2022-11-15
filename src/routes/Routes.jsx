import { Navigate, useRoutes } from 'react-router-dom';

import createTicket from './create-ticket';
import currentTicket from './current-ticket';
import myTickets from './my-tickets';
import teamTickets from './team-tickets';

const defaultRoute = {
  path: '/*',
  element: <Navigate to="/current-ticket"/>
}

export const Routes = () => {
  return useRoutes([createTicket, myTickets, teamTickets, currentTicket, defaultRoute]);
}