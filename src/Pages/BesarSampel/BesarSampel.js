import React, { useEffect, useState } from "react";
import "./BesarSampel.css";
import WelcomeText from "./components/WelcomeText";
import dataQuestionsAnalytic from "./data/dataQuestionsAnalytic";
import dataQuestionsDescriptive from "./data/dataQuestionsDescriptive";
import dataMatchBesarSampel from "./data/dataMatchBesarSampel";
import Subsection from "../../components/Subsection/Subsection";
import subsectionOne from "./data/dataSubsection";
import AnalitikQuestions from "./components/AnalitikQuestions";
import QAnalyticOrDescriptive from "./components/QAnalyticOrDescriptive";
import DescriptiveQuestions from "./components/DescriptiveQuestions";

function BesarSampel() {
  
  const [outputToPage, setOutputToPage] = useState("");
  const [selesai, setSelesai] = useState(false);
  const [mulai, setMulai] = useState(false);
  const [enableKeduanya3, setEnableKeduanya3] = useState(false);
  const [show34, setShow34] = useState(false);
  const [show7, setShow7] = useState(false);
  const [questions, setQuestions] = useState(dataQuestionsAnalytic);
  const [foundOutput, setFoundOutput] = useState(false);
  const [analytic, setAnalytic] = useState(false);
  const [descriptive, setDescriptive] = useState(false);
  const [questionsDescriptive, setQuestionsDescriptive] = useState(
    dataQuestionsDescriptive
  );

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
    if (answers[1] === "Satu" && answers[3] === "Keduanya") {
      setAnswers({
        ...answers,
        3: "",
      });
    }
    determineBesarSampel();
  };

  function determineBesarSampel() {
    console.log("MENENTUKAN: ", answers);
    Object.keys(dataMatchBesarSampel).map((match) => {
      if (
        JSON.stringify(dataMatchBesarSampel[match].answer) ===
        JSON.stringify(answers)
      ) {
        setOutputToPage(JSON.stringify(dataMatchBesarSampel[match].rumus));
        setFoundOutput(true);
      } else {
        console.log(
          "dataMatchBesarSampel[match].rumus",
          dataMatchBesarSampel[match]
        );
      }

      return null;
    });

    if (answers[5] === "Dua atau lebih") {
      setOutputToPage("Tidak ditemukan rumus yang sesuai.");
    }
  }

  return (
    <>
      <div className="uji-hipotesis__container">

        {!(analytic || descriptive) && mulai ? (
          <QAnalyticOrDescriptive
            setAnalytic={setAnalytic}
            setDescriptive={setDescriptive}
          />
        ) : null}

        {descriptive && mulai ? (
          <DescriptiveQuestions
            questionsDescriptive={questionsDescriptive}
            setQuestionsDescriptive={setQuestionsDescriptive}
          />
        ) : null}

        {analytic && mulai ? (
          <AnalitikQuestions
            questions={questions}
            show34={show34}
            show7={show7}
            enableKeduanya3={enableKeduanya3}
            setQuestions={setQuestions}
            answers={answers}
            setAnswers={setAnswers}
          />
        ) : null}

        {mulai ? (
          <></>
        ) : (
          <>
          <WelcomeText
            foundOutput={foundOutput}
            outputToPage={outputToPage}
            setMulai={setMulai}
            selesai={selesai}
            answers={answers}
            buttonText="Mulai Hitung Besar Sampel"
            title="Hitung Besar Sampel"
            description="Rumus besar sampel yang cocok untuk penelitianmu dan hitung
          jumlahnya dengan menjawab beberapa pertanyaan berikut!"
          />
          </>
        )}

        {mulai && analytic ? (
          <>
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
          </>
        ) : null}
      </div>
      <Subsection title={subsectionOne.title} text={subsectionOne.text} />
    </>
  );
}

export default BesarSampel;
