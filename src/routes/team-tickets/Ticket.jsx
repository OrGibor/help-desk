import * as React from "react";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardActions,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import TicketStatus from "./TicketStatus";
import SelectTroubleshooter from "./SelectTroubleshooter";
import TicketRating from "./TicketRating";

const Ticket = ({ title, status, dateTime, subtitle, urgency }) => {
  const [troubleshooter, setTroubleshooter] = useState(1);

  return (
    <Card
      sx={{
        backgroundColor: "LightGray",
        borderRadius: "10px",
        margin: "15px",
        minHeight: 150,
      }}
    >
      <CardHeader
        title={
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" flexDirection="row">
              <Typography variant="h6" component="div">
                {title}
              </Typography>
              <TicketStatus statusId={status} />
            </Box>
            <Typography
              component="span"
              sx={{
                fontSize: 16,
                fontWeight: 540,
              }}
            >
              {dateTime}
            </Typography>
          </Box>
        }
        subheader={<Typography variant="subtitle1">{subtitle}</Typography>}
        disableTypography
      />
      <CardActions>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
        >
          <TicketRating urgency={urgency} />
          <SelectTroubleshooter
            setTroubleshooter={setTroubleshooter}
            troubleshooter={troubleshooter}
          />
        </Box>
      </CardActions>
    </Card>
  );
};

export default Ticket;
