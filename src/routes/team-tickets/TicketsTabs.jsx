import { Tabs, Tab, Box } from "@mui/material";

const TicketsTabs = ({ tabs, currentStateIndex, setCurrentStateIndex }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        variant="fullWidth"
        value={currentStateIndex}
        onChange={(_, selectedIndex) => setCurrentStateIndex(selectedIndex)}
      >
        {tabs.map(({ displayName, id }) => (
          <Tab label={displayName} key={id} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TicketsTabs;
