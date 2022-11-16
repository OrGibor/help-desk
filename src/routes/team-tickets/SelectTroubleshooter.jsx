import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const availableTroubleshooters = [
  { id: 1, name: "דורי להב" },
  { id: 2, name: "ניצן חמצני" },
  { id: 3, name: "זוהר ג'ו" },
];

export default function SelectTroubleshooter(props) {
  return (
    <FormControl>
      <InputLabel>מטפל</InputLabel>
      <Select
        sx={{ width: "10rem", hight: "3rem" }}
        value={props.troubleshooter}
        label="מטפל"
        onChange={(event) => props.setTroubleshooter(event.target.value)}
        onClick={e => e.stopPropagation()}
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
