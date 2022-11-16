import { Box } from "@mui/material";
import Ticket from "./Ticket";

const TicketsList = ({ ticketList }) => {
  return (
    <Box display="flex" flexDirection="column" overflow="auto">
      {ticketList.map(({ id, ...ticket }) => (
        <Ticket key={id} {...ticket} />
      ))}
    </Box>
  );
};

export default TicketsList;
