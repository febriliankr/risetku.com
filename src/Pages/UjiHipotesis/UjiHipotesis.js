import React, { useState } from "react";
import "./UjiHipotesis.css";
import WelcomeText from "./components/WelcomeText";
import Questions from "./components/Questions";
import dataQuestions from "./dataQuestions"

function UjiHipotesis() {
  const [mulai, setMulai] = useState(false);
  const [answers, setAnswers] = useState({
    1: '',
    2: '',
    3: '',
  });
  const [questions, setQuestions] = useState(dataQuestions);

  return (
    <div className="uji-hipotesis__container">
      {mulai ? (
        Object.keys(questions).map((q) => {
          return (
            <>
              <Questions
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
        })
      ) : (
        <WelcomeText setMulai={setMulai} />
      )}
      {/* 
      {Object.keys(questions).map((q) => {
        return (
          <>
            <Questions
              setAnswers={setQuestions}
              question={questions[q].question}
              options={questions[q].options}
            />
          </>
        );
      })} */}
    </div>
  );
}

export default UjiHipotesis;
