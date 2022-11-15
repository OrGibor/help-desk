import { Rating } from "@mui/material";

const SAD_ICON = "😰";

export default function TicketRating({ urgency }) {
  return (
    <Rating
      value={urgency}
      precision={0.5}
      readOnly
      icon={SAD_ICON}
      emptyIcon={SAD_ICON}
    />
  );
}
