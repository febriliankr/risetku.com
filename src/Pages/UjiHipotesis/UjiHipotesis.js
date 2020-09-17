import React, { useEffect, useState } from "react";
import "./UjiHipotesis.css";
import WelcomeText from "./components/WelcomeText";
import Questions from "./components/Questions";
import dataQuestions from "./dataQuestions";

function UjiHipotesis() {
  const [selesai, setSelesai] = useState(false);
  const [mulai, setMulai] = useState(false);

  const [show34, setShow34] = useState(false);
  const [show7, setShow7] = useState(false);

  const [answers, setAnswers] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
  });

  useEffect(() => {
    if (answers[2] === "Kategorik") {
      setShow34(true);
    } else if (answers[2] === "Numerik") {
      setShow34(false);
    }
    if (answers[6] === "Numerik") {
      setShow7(true);
    } else if (answers[6] === "Kategorik") {
      setShow7(false);
    }
  }, [answers]);

  const selesaiCleanup = () => {
    if (!show34) {
      setAnswers({ ...answers, 3: "", 4: "" });
    }

    if (!show7) {
      setAnswers({
        ...answers,
        7: "",
      });
    }
  };

  const [questions, setQuestions] = useState(dataQuestions);

  useEffect(() => {
    console.log("answers", answers);
  }, [answers]);

  return (
    <div className="uji-hipotesis__container">
      {mulai ? (
        Object.keys(questions).map((q) => {
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
            selesaiCleanup();
          }}
        >
          Selesai
        </div>
      ) : null}
    </div>
  );
}

export default UjiHipotesis;
