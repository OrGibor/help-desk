import { Box, Tooltip } from "@mui/material";

const status = [
  { id: "pending", color: "Orange", title: "ממתין לנציג" },
  { id: "progress", color: "Blue", title: "בטיפול" },
  { id: "done", color: "Green", title: "ניצחנו!" },
];

const getCurrentStatus = (statusId) => status.find(({ id }) => id === statusId);

export default function TicketStatus({ statusId }) {
  return (
    <Tooltip title={getCurrentStatus(statusId).title} placement="left">
      <Box
        style={{
          display: "flex",
          margin: "12px",
          width: "13px",
          height: "13px",
          backgroundColor: getCurrentStatus(statusId).color,
          borderRadius: "50%",
        }}
      />
    </Tooltip>
  );
}
