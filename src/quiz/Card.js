import React from "react";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  Card: {
    width: "30%",
    margin: "10rem auto",
    padding: "2rem 1rem",
    
  },
});

export default function Cards(props) {
  const classes = useStyles();
  return <Card className={classes.Card}>{props.children}</Card>;
}
