import React, { useEffect, useState } from "react";
import "./UjiHipotesis.css";
import WelcomeText from "./components/WelcomeText";
import Questions from "./components/Questions";
import dataQuestions from "./dataQuestions";

function UjiHipotesis() {
  const [selesai, setSelesai] = useState(false);
  const [mulai, setMulai] = useState(false);
  const [answers, setAnswers] = useState({
    1: "",
    2: "",
    3: "",
  });
  const [questions, setQuestions] = useState(dataQuestions);

  useEffect(() => {
    console.log('answers', answers)
  }, [answers])

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
        <WelcomeText
          setMulai={setMulai}
          selesai={selesai}
          answers={answers}
          title="Uji Hipotesis"
          description="Uji hipotesis adalah metode pengambilan keputusan dari suatu hipotesis
          penelitian. Uji hipotesis yang tepat dapat menentukan apakah hipotesis
          kita diterima atau tidak."
        />
      )}
      {mulai ? (
        <div
          className="selesai__button"
          onClick={() => {
            setSelesai(true);
            setMulai(false);
          }}
        >
          Selesai
        </div>
      ) : null}
    </div>
  );
}

export default UjiHipotesis;
