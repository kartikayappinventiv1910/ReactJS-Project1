import React, { useEffect, useState } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

import Cards from "./Card";
import QuizButton from "./button";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#ebba34",
  },
  mainheading: {
    fontSize:"45px",
    fontWeight: "bold",
    textAlign: "center",
    color:"black"
  },

  correctAns: {
    fontSize: "20px",
    marginTop: "1.5rem",
    fontWeight: "bold",
  },
});
export default function EndScreen(props) {
  const classes = useStyles();
  const { result, setAnswers, data, setCurrentQues } = props;

  const [correctAnswer, setCorrectAnswer] = useState(0);
  const history = useHistory();

  useEffect(() => {
    let correctAns = 0;

    result.forEach((res, index) => {
      if (res.ans === data[index].correctOption) {
        correctAns++;
      }
    });
    setCorrectAnswer(correctAns);
  }, []);

  const resetQuiz = () => {
    setCurrentQues(0);
    setAnswers([]);
    history.push("/");
  };
  return (
    <Box className={classes.mainContainer}>
    <Typography variant="h4" className={classes.mainheading}>
          {"Quiz App"}
        </Typography>
      <Cards>
        <Typography variant="h4">{"Your Result"}</Typography>
        <Typography
          className={classes.correctAns}
        >{`Correct Answers: ${correctAnswer} / ${data.length}`}</Typography>
        <Typography className={classes.correctAns}>
          {`Percentage: ${Math.floor((correctAnswer / data.length) * 100)}`}%
        </Typography>

        <QuizButton handle={resetQuiz} btnText={"Try Again"} />
      </Cards>
    </Box>
  );
}
