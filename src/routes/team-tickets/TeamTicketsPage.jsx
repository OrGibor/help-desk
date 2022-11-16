import { useTicketsContext } from '../../contexts';
import TicketsList from "./TicketsList";

export const TeamTicketsPage = () => {
  const {tickets} = useTicketsContext();

  return (
    <div>
      <TicketsList tickets={tickets}/>
    </div>
  );
};
