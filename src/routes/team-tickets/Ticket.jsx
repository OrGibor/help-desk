import * as React from "react";
import { useState } from "react";
import { Card, CardActions, Typography, Grid, Box } from "@mui/material";
import TicketStatus from "./TicketStatus";
import SelectTroubleshooter from "./SelectTroubleshooter";
import TicketRating from "./TicketRating";

export default function Ticket(props) {
  const [troubleshooter, setTroubleshooter] = useState(1);

  return (
    <Card
      sx={{
        backgroundColor: "LightGray",
        borderRadius: "10px",
        margin: "15px",
      }}
    >
      <Grid
        container
        sx={{ alignItems: "center", margin: "0.5rem 1rem 0 1rem" }}
      >
        <Grid item xs={8}>
          <Box display="flex" flexDirection="row">
            <Typography variant="h5" component="div">
              {props.title}
            </Typography>
            <TicketStatus statusId={props.status} />
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
            {props.dateTime}
          </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{ fontSize: 14, marginLeft: "1.5rem" }}
        color="text.secondary"
        gutterBottom
      >
        {props.subtitle}
      </Typography>
      <CardActions>
        <Grid
          container
          sx={{ alignItems: "center", margin: "0.5rem 1rem 0 0.2rem" }}
        >
          <Grid item xs={8}>
            <TicketRating urgency={props.urgency} />
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
