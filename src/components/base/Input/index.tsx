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
    <div>
      <TextField
        type={type}
        value={value}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
        variant="standard"
        {...props}
      />
    </div>
  );
};

export default InputComponent;
