import React from "react";

// Librairies
import { Button, ButtonProps } from "@mui/material";

interface IProps extends ButtonProps {
  label: string;
}

const ButtonComponent: React.FC<IProps> = ({ label, ...props }) => {
  return (
    <Button variant="outlined" {...props}>
      {label}
    </Button>
  );
};

export default ButtonComponent;
