import LensIcon from '@mui/icons-material/Lens';
import OutlinedLensIcon from '@mui/icons-material/LensOutlined';
import { Rating } from "@mui/material";

export const TicketRating = ({ urgency }) => {
  return (
    <Rating
      sx={{ fontSize: "1.4rem" }}
      value={urgency}
      precision={0.5}
      readOnly
      icon={<LensIcon color="error"/>}
      emptyIcon={<OutlinedLensIcon/>}
    />
  );
};
