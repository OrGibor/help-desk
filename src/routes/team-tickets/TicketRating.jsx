import { Rating } from "@mui/material";

export default function TicketRating(props) {
  return (
    <Rating
      value={props.urgency}
      precision={0.5}
      readOnly
      icon="😰"
      emptyIcon="😰"
    />
  );
}
