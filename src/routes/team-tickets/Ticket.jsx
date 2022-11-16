import {
  Box, Card, CardActions, CardHeader, Typography
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { TicketRating } from "../../components";
import SelectTroubleshooter from "./SelectTroubleshooter";
import TicketStatus from "./TicketStatus";

const Ticket = ({ title, status, dateTime, subtitle, urgency, onTicketClick }) => {
  const [troubleshooter, setTroubleshooter] = useState(1);

  return (
    <Card
      onClick={onTicketClick}
      sx={{
        backgroundColor: "LightGray",
        borderRadius: "10px",
        m: 2,
        cursor: 'pointer'
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
      <CardActions sx={{pb: 2}}>
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
