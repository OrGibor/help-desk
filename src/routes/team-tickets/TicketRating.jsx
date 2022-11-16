import { Rating } from "@mui/material";

const SAD_ICON = "😰";

const TicketRating = ({ urgency }) => {
  return (
    <Rating
      sx={{ fontSize: "1.4rem" }}
      value={urgency}
      precision={0.5}
      readOnly
      icon={SAD_ICON}
      emptyIcon={SAD_ICON}
    />
  );
};

export default TicketRating;
