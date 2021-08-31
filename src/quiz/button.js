import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  submitbtn: {
    backgroundColor: "#34eb6b",
    color: "black",
    padding: "0.5rem 1rem",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "2px",
    margin: "2rem 0",

    "&:hover": {
      backgroundColor: "#3492eb",
    },
  },
});

export default function QuizButton(props) {
  const { handle, btnText } = props;
  const classes = useStyles();
  return (
    <Button className={classes.submitbtn} onClick={handle}>
      {btnText}
    </Button>
  );
}
