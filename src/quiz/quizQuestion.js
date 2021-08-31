import React, { useEffect, useRef, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

import Cards from "./Card";
import QuizButton from "./button";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#aae3b3",
  },
  mainheading: {
    fontSize:"45px",
    fontWeight: "bold",
    textAlign: "center",
    color:"black"
  },

  quizQuestion: {
    fontWeight: "bold",
    textAlign: "left",
    margin: "1rem 0 2rem  3rem",
  },

  quizOptions: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    textAlign: "left",
    marginLeft: "3rem",
  },

  labelInput: {
    margin: "8px 0",
    fontSize: "20px",
    cursor: "pointer",
    display: "flex",
  },

  optionInput: {
    marginRight: "10px",
    letterSpacing: "2px",
  },
});

export default function Questions(props) {
  const { data, numOfQuestions, currentQues, setCurrentQues, setAnswers } =
    props;
  const classes = useStyles();
  const quizAnswer = useRef();
  const history = useHistory();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const findInput = quizAnswer.current.querySelector("input:checked");
    if (findInput) {
      findInput.checked = false;
    }
  }, [data]);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleSubmit = () => {
    setAnswers((prevAns) => [
      ...prevAns,
      { ques: data.question, ans: selected },
    ]);
    setSelected("");
    if (currentQues < numOfQuestions - 1) {
      setCurrentQues(currentQues + 1);
    } else {
      history.push("/quizfinish");
    }
  };
  return (
    <Box className={classes.mainContainer}>
    <Typography variant="h4" className={classes.mainheading}>
          {"Quiz App"}
        </Typography>
      <Cards>
        <Typography variant="h6">{`Question ${currentQues + 1}`}</Typography>
        <Typography variant="h5" className={classes.quizQuestion}>
          {data.question}
        </Typography>
        <Box className={classes.quizOptions} ref={quizAnswer}>
          {data.options.map((option, index) => {
            return (
              <label className={classes.labelInput} key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  className={classes.optionInput}
                  required
                  onChange={handleChange}
                />
                {option}
              </label>
            );
          })}
        </Box>
        
        <QuizButton handle={handleSubmit} btnText={"Submit"} />
      </Cards>
    </Box>
  );
}
