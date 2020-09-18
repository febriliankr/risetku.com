import React, { useState } from "react";

function DescriptiveQuestions({
  questionsDescriptive,
  setQuestionsDescriptive,
}) {
  const [numerikDescriptive, setNumerikDescriptive] = useState(false);
  const [kategorikDescriptive, setKategorikDescriptive] = useState(false);

  return (
    <div className="questions">
      {kategorikDescriptive ? (
        <>
          <h1>Rumus Besar Sampel</h1>
          <img
            style={{
              maxWidth: "100%",
            }}
            src={`images/rumus/rumus1.jpg`}
            alt="rumus"
          />
        </>
      ) : null}

      {numerikDescriptive ? (
        <>
        <h1>Rumus Besar Sampel</h1>
          <img
            style={{
              maxWidth: "100%",
            }}
            src={`images/rumus/rumus2.jpg`}
            alt="rumus"
          />
        </>
      ) : null}

      {numerikDescriptive || kategorikDescriptive ? null : (
        <>
          <p
            style={{
              color: "grey",
              marginBottom: 0,
            }}
          >
            Numerik atau Kategorik
          </p>
          <div className="questions__head">
            <h2 className="questions__title">Apakah jenis penelitian Anda?</h2>
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
        </>
      )}
    </div>
  );
}

export default DescriptiveQuestions;
