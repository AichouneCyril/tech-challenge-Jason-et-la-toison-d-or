import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import RowingIcon from "@mui/icons-material/Rowing";

export default function InputWithIcon() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          inscrire un nouveau membre
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <RowingIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
