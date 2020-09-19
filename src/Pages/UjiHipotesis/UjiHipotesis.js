import React, { useEffect, useState } from "react";
import "./UjiHipotesis.css";
import WelcomeText from "./components/WelcomeText";
import Questions from "./components/Questions";
import dataQuestions from "./dataQuestions";
import dataMatchAll from "./dataMatchAll";
import Subsection from "../../components/Subsection/Subsection";
import subsectionUjiHipotesisOne from "./data/subsectionUjiHipotesisOne";
import ReactTooltip from "react-tooltip";

function UjiHipotesis() {
  let outputToPage = "";
  const [selesai, setSelesai] = useState(false);
  const [mulai, setMulai] = useState(false);
  const [enableKeduanya3, setEnableKeduanya3] = useState(false);
  const [show34, setShow34] = useState(false);
  const [show7, setShow7] = useState(false);
  const [questions, setQuestions] = useState(dataQuestions);
  const [ultimateAnswer, setUltimateAnswer] = useState(false);
  const [theAnswerToEverything, setTheAnswerToEverything] = useState("");

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
    determineUjiHipotesis();
  };

  function determineUjiHipotesis() {
    console.log("MENENTUKAN: ", answers);
    Object.keys(dataMatchAll).map((match) => {
      //console.log(dataMatchAll[match].answer);
      if (
        JSON.stringify(dataMatchAll[match].answer) === JSON.stringify(answers)
      ) {
        setTheAnswerToEverything(JSON.stringify(dataMatchAll[match].uji));
        setUltimateAnswer(true);
      } else {
        console.log("dataMatchAll[match].uji", dataMatchAll[match].uji);
        // console.log(JSON.stringify(dataMatchAll[match].answer));
        // console.log(JSON.stringify(answers));
      }
      return null;
    });

    if (outputToPage.length === 0) {
      outputToPage = "Tidak ditemukan uji hipotesis yang sesuai.";
    }
  }

  return (
    <div className="uji-hipotesis__container">
      {ultimateAnswer ? (
        <div
          className="questions"
          style={{
            textAlign: "center",
          }}
        >
          <p style={{ color: "#a5a5a5" }}>
            Uji hipotesis yang cocok untuk penelitian Anda adalah
          </p>
          <h1 style={{ color: "#e9e9e9" }}>{theAnswerToEverything}</h1>
          {theAnswerToEverything === `"Chi-square Test"` ? (
            <p style={{ color: "#a5a5a5" }}>
              Gunakan Fisher’s exact test jika tidak memenuhi syarat Chi-square
            </p>
          ) : null}
        </div>
      ) : selesai ? (
        <div
          className="questions"
          style={{
            textAlign: "center",
          }}
        >
          <h2>Tidak ada uji hipotesis yang cocok untuk penelitian Anda.</h2>
        </div>
      ) : null}
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

      <Subsection
        title={subsectionUjiHipotesisOne.title}
        text={subsectionUjiHipotesisOne.text}
      />
      <ReactTooltip />
      <p
        style={{
          fontSize: "10px",
          color: "grey",
        }}
        data-tip={`${JSON.stringify(answers)}`}
      >
        Debug
      </p>
    </div>
  );
}

export default UjiHipotesis;
