import React, { useState } from "react";
import dataLegenda from "../data/dataLegenda";

function DescriptiveQuestions({
  questionsDescriptive,
  setQuestionsDescriptive,
}) {
  const [kategorikDescriptive, setKategorikDescriptive] = useState(false);
  const [numerikDescriptive, setNumerikDescriptive] = useState(false);

  function createMarkup() {
    if (kategorikDescriptive) {
      return { __html: dataLegenda[1] };
    }
    if (numerikDescriptive) {
      return { __html: dataLegenda[2] };
    }
  }

  return (
    <>
      {kategorikDescriptive ? (
        <>
          <div className="questions">
            <h1>Rumus Besar Sampel</h1>
            <img
              style={{
                maxWidth: "100%",
              }}
              src={`images/rumus/rumus1.jpg`}
              alt="rumus"
            />
          </div>
          <div className="questions-left">
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </>
      ) : null}

      {numerikDescriptive ? (
        <>
          <div className="questions">
            <h1>Rumus Besar Sampel</h1>
            <img
              style={{
                maxWidth: "100%",
              }}
              src={`images/rumus/rumus2.jpg`}
              alt="rumus"
            />
          </div>
          <div className="questions-left">
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </>
      ) : null}

      {numerikDescriptive || kategorikDescriptive ? null : (
        <>
          <div className="questions">
            <p
              style={{
                color: "grey",
                marginBottom: 0,
              }}
            >
              Numerik atau Kategorik
            </p>
            <div className="questions__head">
              <h2 className="questions__title">
                Apakah jenis penelitian Anda?
              </h2>
            </div>
            <div className="questions__options">
              <div className="questions__options">
                <div
                  onClick={() => setNumerikDescriptive(true)}
                  className="questions__button"
                  style={{
                    "margin-right": "15px",
                  }}
                >
                  Numerik
                </div>
                <div
                  onClick={() => setKategorikDescriptive(true)}
                  className="questions__button"
                >
                  Kategorik
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DescriptiveQuestions;
