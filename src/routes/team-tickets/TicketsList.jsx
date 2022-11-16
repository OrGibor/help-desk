import { useNavigate } from 'react-router-dom';
import Ticket from "./Ticket";

export default function TicketsList({tickets}) {
  const navigate = useNavigate();

  return (
    <div style={{ width: "700px" }}>
      {tickets.map(({ id, ...ticket }) => (
        <Ticket key={id} {...ticket} onClick={() => navigate('/current-ticket')} />
      ))}
    </div>
  );
}
