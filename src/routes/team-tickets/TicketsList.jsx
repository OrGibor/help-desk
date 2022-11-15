import Ticket from "./Ticket";

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

export default function TicketsList() {
  return (
    <div style={{ width: "700px" }}>
      {ticketList.map(({ id, urgency, status, title, subtitle, dateTime }) => (
        <Ticket
          key={id}
          urgency={urgency}
          status={status}
          title={title}
          subtitle={subtitle}
          dateTime={dateTime}
        />
      ))}
    </div>
  );
}
