import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDataStore } from "./dataStore";
import "./reserve.css";

export default function Reserve() {
  const { state, dispatch } = useDataStore();

  const handleSize = (e: SelectChangeEvent) =>
    dispatch({ type: "SIZE", payload: e.target.value });

  const handleTime = (e: SelectChangeEvent) =>
    dispatch({ type: "TIME", payload: e.target.value });

  return (
    <div className="resContainer">
      <FormControl sx={{ m: 1, minWidth: 250 }} size="medium">
        <InputLabel>Size</InputLabel>
        <Select value={state.size} label="time" onChange={handleSize}>
          <MenuItem value={state.size}>
            <em>{"1 Guest"}</em>
          </MenuItem>
          <MenuItem value={2}>2 Guest</MenuItem>
          <MenuItem value={2}>3 Guest</MenuItem>
          <MenuItem value={4}>4 Guest</MenuItem>
          <MenuItem value={5}>5 Guest</MenuItem>
          <MenuItem value={6}>6 Guest</MenuItem>
          <MenuItem value={7}>7 Guest</MenuItem>
          <MenuItem value={8}>8 Guest</MenuItem>
          <MenuItem value={9}>9 Guest</MenuItem>
          <MenuItem value={10}>10 Guest</MenuItem>
          <MenuItem value={11}>11 Guest</MenuItem>
          <MenuItem value={12}>12+ Guest</MenuItem>
        </Select>
      </FormControl>

      <input
        type="date"
        value={state.date}
        className="date"
        onChange={(e) => dispatch({ type: "DATE", payload: e.target.value })}
      />

      <FormControl sx={{ m: 1, minWidth: 250 }} size="medium">
        <InputLabel>Time</InputLabel>
        <Select value={state.time} label="time" onChange={handleTime}>
          <MenuItem value={"11:00 AM"}>
            <em>{"11:00 AM"}</em>
          </MenuItem>
          <MenuItem value={"11:30 AM"}>11:30 AM</MenuItem>
          <MenuItem value={"12:00PM"}>12:00 PM</MenuItem>
          <MenuItem value={"12:30 AM"}>12:30 PM</MenuItem>
          <MenuItem value={"1:00 PM"}>1:00 PM </MenuItem>
          <MenuItem value={"1:30 PM"}>1:30 PM</MenuItem>
          <MenuItem value={"2:00 PM"}>2:00 PM</MenuItem>
          <MenuItem value={"2:30 PM"}>2:00 PM</MenuItem>
          <MenuItem value={"3:00 PM"}>3:00 PM</MenuItem>
          <MenuItem value={"3:30 PM"}>3:30 PM</MenuItem>
          <MenuItem value={"4:00 PM"}>4:00 PM</MenuItem>
          <MenuItem value={"4:30 PM"}>4:30 PM</MenuItem>
          <MenuItem value={"5:00 PM"}>5:00 PM</MenuItem>
          <MenuItem value={"5:30 PM"}>5:30 PM</MenuItem>
          <MenuItem value={"6:00 PM"}>6:00 PM</MenuItem>
          <MenuItem value={"6:30 PM"}>6:30 PM</MenuItem>
          <MenuItem value={"7:00 PM"}>7:00 PM</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
