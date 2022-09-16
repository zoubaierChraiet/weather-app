import React from "react";

// Librairies
import { TextField, TextFieldProps } from "@mui/material";

const InputComponent: React.FC<TextFieldProps> = ({
  value,
  onChange,
  type,
  label,
  placeholder,
  ...props
}) => {
  return (
    <TextField
      role="textbox"
      inputProps={{ "data-testid": "content-input" }}
      type={type}
      value={value}
      onChange={onChange}
      label={label}
      placeholder={placeholder}
      variant="standard"
      {...props}
    />
  );
};

export default InputComponent;
