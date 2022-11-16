import { TextField } from "@mui/material";

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <TextField
      sx={{ width: "19rem" }}
      label="חיפוש"
      variant="filled"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
};

export default SearchBar;
