import React from "react";
import quizData from "./data";

function Quiz() {
  console.log(quizData, "quizdata");
  
  // let currentQuiz = 0;
  // let score = 0;

  // loadQuiz();

  // function loadQuiz() {
  //   deselectAnswers();

  //   const currentQuizData = quizData[currentQuiz];

  //   questionEl.innerText = currentQuizData.question;
  //   a_text.innerText = currentQuizData.a;
  //   b_text.innerText = currentQuizData.b;
  //   c_text.innerText = currentQuizData.c;
  //   d_text.innerText = currentQuizData.d;
  // }

  // function getSelected() {
  //   let answer = undefined;

  //   answerEls.forEach((answerEl) => {
  //     if (answerEl.checked) {
  //       answer = answerEl.id;
  //     }
  //   });

  //   return answer;
  // }

  // function deselectAnswers() {
  //   answerEls.forEach((answerEl) => {
  //     answerEl.checked = false;
  //   });
  // }

  // submitBtn.addEventListener("click", () => {
  //   // check to see the answer
  //   const answer = getSelected();

  //   if (answer) {
  //     if (answer === quizData[currentQuiz].correct) {
  //       score++;
  //     }

  //     currentQuiz++;
  //     if (currentQuiz < quizData.length) {
  //       loadQuiz();
  //     } else {
  //       quiz.innerHTML = `
  //               <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
  //               <button onclick="location.reload()">Reload</button>
  //           `;
  //     }
  //   }
  // });

  return (
    <div>
      <div class="quiz-container" id="quiz">
        <div class="quiz-header">
          <h2 id="question">Question text</h2>
          <ul>
            <li>
              <input type="radio" id="a" name="answer" class="answer" />
              <label id="a_text" for="a">
                Question
              </label>
            </li>
            <li>
              <input type="radio" id="b" name="answer" class="answer" />
              <label id="b_text" for="b">
                Question
              </label>
            </li>
            <li>
              <input type="radio" id="c" name="answer" class="answer" />
              <label id="c_text" for="c">
                Question
              </label>
            </li>
            <li>
              <input type="radio" id="d" name="answer" class="answer" />
              <label id="d_text" for="d">
                Question
              </label>
            </li>
          </ul>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Quiz;
