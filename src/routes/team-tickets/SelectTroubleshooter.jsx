import { MenuItem, FormControl, Select, InputLabel } from "@mui/material";

const availableTroubleshooters = [
  { id: 1, name: "דורי להב" },
  { id: 2, name: "ניצן חמצני" },
  { id: 3, name: "זוהר ג'ו" },
];

export default function SelectTroubleshooter(props) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">מטפל</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.troubleshooter}
        label="מטפל"
        onChange={(event) => props.setTroubleshooter(event.target.value)}
      >
        {availableTroubleshooters.map(({ id, name }) => (
          <MenuItem value={id} key={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
