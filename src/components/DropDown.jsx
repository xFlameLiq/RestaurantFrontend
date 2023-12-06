import { useState } from "react";
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";
const DropDown = ({ register, errors }) => {
  const [type, setType] = useState("");
  const handleType = (event) => {
    setType(event.target.value);
  };
  return (
    <FormControl
      fullWidth
      {...register("type", {
        required: true,
      })}
      error={!!errors.type}
    >
      <InputLabel id="type-label">Tipo</InputLabel>
      <Select
        labelId="type-label"
        name="type"
        value={type}
        label={"Tipo"}
        onChange={handleType}
      >
        <MenuItem value={"drink"}>drink</MenuItem>
        <MenuItem value={"food"}>food</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropDown;
