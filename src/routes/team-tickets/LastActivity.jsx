import { Card, Typography } from "@mui/material";

const LastActivity = ({ width }) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        margin: "15px",
        width,
        hight: "100%",
      }}
    >
      <Typography variant="h4" component="div" sx={{ margin: "1rem" }}>
        פעילות אחרונה
      </Typography>
    </Card>
  );
};

export default LastActivity;
