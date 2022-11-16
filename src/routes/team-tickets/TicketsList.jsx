import Ticket from "./Ticket";

const TicketsList = ({ ticketList }) => {
  return (
    <div style={{ width: "550px" }}>
      {ticketList.map(({ id, ...ticket }) => (
        <Ticket key={id} {...ticket} />
      ))}
    </div>
  );
};

export default TicketsList;
