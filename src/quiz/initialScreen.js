import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

import Cards from "./Card";
import QuizButton from "./button";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100vh",
    padding: "2rem",
    backgroundColor: "#aae3b3",
  },
  mainheading: {
    fontSize:"45px",
    fontWeight: "bold",
    textAlign: "center",
    color:"black"
  },

  heading: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
});
export default function StartQuiz() {
  const classes = useStyles();
  const history = useHistory();

  const quizStart = () => {
    history.push("/question");
  };

  return (
    <Box className={classes.mainContainer}>
    <Typography variant="h4" className={classes.mainheading}>
          {"Quiz App"}
        </Typography>
      <Cards>
        {/* <Typography variant="h4" className={classes.mainheading}>
          {"Quiz App"}
        </Typography> */}
        <Typography variant="h5" className={classes.heading}>
          {"Click on Start to Face the Questions"}
        </Typography>

        <QuizButton handle={quizStart} btnText={"Start"} />
      </Cards>
    </Box>
  );
}
