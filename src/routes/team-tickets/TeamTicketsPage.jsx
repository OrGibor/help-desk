import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useTickets } from '../../contexts';
import SearchBar from "./SearchBar";
import TicketsList from "./TicketsList";
import TicketsTabs from "./TicketsTabs";

const filterStates = [
  {
    id: 1,
    displayName: "פניות פתוחות",
    filterFunction: (tickets) =>
      tickets.filter(({ status }) => status !== "done"),
  },
  {
    id: 2,
    displayName: "פניות סגורות",
    filterFunction: (tickets) =>
      tickets.filter(({ status }) => status === "done"),
  },
  {
    id: 3,
    displayName: "כל הפניות",
    filterFunction: (tickets) => tickets,
  },
];

export const TeamTicketsPage = () => {
  const {tickets} = useTickets();
  const [currentStateIndex, setCurrentStateIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const currentState = filterStates[currentStateIndex];

  const filterdList = !searchValue
    ? tickets
    : tickets.filter(
        ({ title, subtitle }) =>
          title.includes(searchValue) || subtitle.includes(searchValue)
      );

  return (
    <Box display="flex" flex={1}>
      <Box display="flex" flexDirection="column" flex={1}>
        <Typography variant="h3" component="div" sx={{ mt: 2, mx: 2 }}>
          הפניות של צוות משוב
        </Typography>
        <Box sx={{ m: 2 }}>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </Box>
        <TicketsTabs
          tabs={filterStates}
          currentStateIndex={currentStateIndex}
          setCurrentStateIndex={setCurrentStateIndex}
        />
        <TicketsList ticketList={currentState.filterFunction(filterdList)} />
      </Box>
      {/* <LastActivity width="40%" /> */}
    </Box>
  );
};
