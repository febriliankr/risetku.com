import React from "react";
import Questions from "./Questions";

function AnalitikQuestions({
    questions,
    show34,
    show7,
    enableKeduanya3,
    setQuestions,
    answers,
    setAnswers
}) {
  return (
    <div>
      {Object.keys(questions).map((q) => {
        if (
          !show34 &&
          (questions[q].number === 3 || questions[q].number === 4)
        ) {
          return null;
        }
        if (!show7 && questions[q].number === 7) {
          return null;
        }
        return (
          <>
            <Questions
              enableKeduanya3={enableKeduanya3}
              number={questions[q].number}
              setQuestions={setQuestions}
              questions={questions}
              answers={answers}
              setAnswers={setAnswers}
              question={questions[q].question}
              options={questions[q].options}
            />
          </>
        );
      })}
    </div>
  );
}

export default AnalitikQuestions;
