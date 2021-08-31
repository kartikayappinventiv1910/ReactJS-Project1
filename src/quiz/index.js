import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StartQuiz from "./initialScreen";
import Questions from "./quizQuestion";
import { data } from "./data";
import EndScreen from "./quizEnd";

export default function Quiz() {
  const [currentQues, setCurrentQues] = useState(0);
  const [answers, setAnswers] = useState([]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <StartQuiz />
        </Route>

        <Route path="/question" exact>
          <Questions
            data={data[currentQues]}
            numOfQuestions={data.length}
            currentQues={currentQues}
            setCurrentQues={setCurrentQues}
            setAnswers={setAnswers}
          />
        </Route>

        <Route path="/quizfinish" exact>
          <EndScreen
            result={answers}
            setAnswers={setAnswers}
            data={data}
            setCurrentQues={setCurrentQues}
          />
        </Route>
      </Switch>
    </Router>
  );
}
