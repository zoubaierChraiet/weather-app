import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
    marginBottom: 10,
  },
  errorMessage: {
    marginTop: 5,
    color: "red",
  },
  input: {
    flexGrow: 1,
  },
});
