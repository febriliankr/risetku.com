import React, { useEffect, useState } from "react";
import "./BesarSampel.css";
import "./subsection.css";
import WelcomeText from "./components/WelcomeText";
import Questions from "./components/Questions";
import dataQuestionsBesarSampel from "./dataQuestionsBesarSampel";

function UjiHipotesis() {
  const [selesai, setSelesai] = useState(false);
  const [mulai, setMulai] = useState(false);
  const [answers, setAnswers] = useState({
    1: "",
    2: "",
    3: "",
  });
  const [questions, setQuestions] = useState(dataQuestionsBesarSampel);

  useEffect(() => {
    console.log('answers', answers)
  }, [answers])

  return (
    <>
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
          buttonText="Mulai Hitung Besar Sampel"
          title="Hitung Besar Sampel"
          description="Temukan rumus besar sampel yang cocok untuk penelitianmu dan hitung
          jumlahnya dengan menjawab beberapa pertanyaan berikut!"
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
    <div className="subsection__container">
        <h2 className="subsection__title">Apa itu besar sampel?</h2>
        <p className="subsection__text">
          Dalam memulai suatu penelitian, peneliti tentu perlu menentukan sampel
          penelitiannya. Salah satu hal yang paling penting untuk ditentukan
          adalah besar sampel minimal dalam penelitian agar suatu penelitian
          dikatakan memiliki hasil yang valid.
        </p>
        <p className="subsection__text">
          Besar sampel minimal ini dapat ditentukan dengan berbagai rumus.
          Masing-masing penelitian memiliki rumus besar sampel. Peneliti perlu
          mengetahui rumus besar sampel yang sesuai untuk mencapai penelitian
          yang optimal.
        </p>
      </div>
    </>
  );
}

export default UjiHipotesis;
