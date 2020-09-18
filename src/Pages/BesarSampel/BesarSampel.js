import React, { useEffect, useState } from "react";
import "./BesarSampel.css";
import WelcomeText from "./components/WelcomeText";
import Questions from "./components/Questions";
import dataQuestionsBesarSampel from "./dataQuestionsBesarSampel";
import dataMatchBesarSampel from "./dataMatchBesarSampel";
import "./subsection.css";


function BesarSampel() {
  const [outputToPage, setOutputToPage] = useState("");
  const [selesai, setSelesai] = useState(false);
  const [mulai, setMulai] = useState(false);
  const [enableKeduanya3, setEnableKeduanya3] = useState(false);
  const [show34, setShow34] = useState(false);
  const [show7, setShow7] = useState(false);
  const [questions, setQuestions] = useState(dataQuestionsBesarSampel);

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
    if (answers[6] === "Kategorik") {
      setShow7(true);
    } else if (answers[6] === "Numerik") {
      setShow7(false);
    }
    if (answers[1] === "Dua atau lebih" && answers[2] === "Kategorik") {
      setEnableKeduanya3(true);
    }
    if (answers[1] === "Satu") {
      setEnableKeduanya3(false);
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
    if ((answers[1] === "Satu")&&(answers[3] === "Keduanya")) {
      setAnswers({
        ...answers,
        3: "",
      });
    }
    determineUjiHipotesis();
  };

  function determineUjiHipotesis() {
    console.log("MENENTUKAN: ", answers);
    Object.keys(dataMatchBesarSampel).map((match) => {
      if (
        JSON.stringify(dataMatchBesarSampel[match].answer) === JSON.stringify(answers)
      ) {
        setOutputToPage(JSON.stringify(dataMatchBesarSampel[match].rumus));
      } else {
        console.log("dataMatchBesarSampel[match].rumus", dataMatchBesarSampel[match]);
      }

      return null;
    });

    if (answers[5]==="Dua atau lebih"){
      setOutputToPage('Tidak ditemukan rumus yang sesuai.');
    }
  }

  return (
    <>
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
        })
      ) : (
        <WelcomeText
          outputToPage={outputToPage}
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
            selesaiCleanup();
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

export default BesarSampel;
