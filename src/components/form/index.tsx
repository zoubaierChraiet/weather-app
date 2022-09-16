import React from "react";

// Librairies
import Button from "../../components/base/Button";
import Input from "../../components/base/Input";

// Styles
import { useStyles } from "./style";

interface IProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (
    event: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => void;
  errorMessage: string;
}

const Form: React.FC<IProps> = ({
  value,
  onChange,
  onSubmit,
  errorMessage,
}) => {
  const classes = useStyles();
  return (
    <form onSubmit={onSubmit}>
      <div className={classes.root}>
        <Input
          value={value}
          placeholder="Type your location..."
          onChange={onChange}
          type="text"
          className={classes.input}
        />
        <Button label="Get weather" onClick={onSubmit} disabled={!value} />
      </div>
      <span className={classes.errorMessage}>
        {errorMessage || null}
      </span>
    </form>
  );
};

export default Form;
