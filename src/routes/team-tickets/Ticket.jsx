import { Box, Card, CardActions, Grid, Typography } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import SelectTroubleshooter from "./SelectTroubleshooter";
import TicketRating from "./TicketRating";
import TicketStatus from "./TicketStatus";

export default function Ticket({ title, status, dateTime, subtitle, urgency, onClick }) {
  const [isHovering, setIsHovering] = useState(false);
  const [troubleshooter, setTroubleshooter] = useState(1);

  return (
    <Card
      elevation={isHovering ? 4 : 1}
      sx={{
        borderRadius: "10px",
        margin: "15px",
        cursor: 'pointer',
        backgroundColor: 'action.hover'
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      <Grid
        container
        sx={{ alignItems: "center", margin: "0.5rem 1rem 0 1rem" }}
      >
        <Grid item xs={8}>
          <Box display="flex" flexDirection="row">
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <TicketStatus statusId={status} />
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "center" }}>
          <Typography
            component="span"
            sx={{
              fontSize: 20,
              fontWeight: 540,
            }}
          >
            {dateTime}
          </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{ fontSize: 14, marginLeft: "1.5rem" }}
        color="text.secondary"
        gutterBottom
      >
        {subtitle}
      </Typography>
      <CardActions>
        <Grid
          container
          sx={{ alignItems: "center", margin: "0.5rem 1rem 0 0.2rem" }}
        >
          <Grid item xs={8}>
            <TicketRating urgency={urgency} />
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <SelectTroubleshooter
              setTroubleshooter={setTroubleshooter}
              troubleshooter={troubleshooter}
            />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
