import React, { useState } from "react";
import "./UjiHipotesis.css";
import WelcomeText from "./components/WelcomeText";
import Questions from "./components/Questions";

function UjiHipotesis() {
  const [mulai, setMulai] = useState(false);
  const [answers, setAnswers] = useState({
    1: '',
    2: '',
    3: '',
  });
  const [questions, setQuestions] = useState({
    1: {
      number: 1,
      question: "Berapa jumlah variabel bebas Anda?",
      options: ["Satu", "Dua atau lebih"],
      answer: "",
    },
    2: {
      number: 2,
      question:
        "Apakah variabel bebasmu terdiri dari 2 kelompok atau lebih dari 2 kelompok?",
      options: ["Dua kelompok (Dikotom)", "Dua atau lebih (Polikotom)"],
      answer: "",
    },
    3: {
      number: 3,
      question: "Apakah variabel bebasmu berpasangan atau tidak berpasangan?",
      options: ["Satu", "Dua atau lebih"],
      answer: "",
    },
  });

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
