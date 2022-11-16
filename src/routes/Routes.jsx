import { Navigate, useRoutes } from 'react-router-dom';

import currentTicket from './current-ticket';
import teamTickets from './team-tickets';

const defaultRoute = {
  path: '/*',
  element: <Navigate to="/current-ticket"/>
}

export const Routes = () => {
  return useRoutes([teamTickets, currentTicket, defaultRoute]);
}