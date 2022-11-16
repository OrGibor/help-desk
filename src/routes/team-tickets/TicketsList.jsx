import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Ticket from "./Ticket";

const TicketsList = ({ ticketList }) => {
  const navigate = useNavigate();
  
  return (
    <Box overflow="auto">
      {ticketList.map(({ id, ...ticket }) => (
        <Ticket key={id} {...ticket} onTicketClick={() => navigate('/current-ticket')} />
      ))}
    </Box>
  );
};

export default TicketsList;
