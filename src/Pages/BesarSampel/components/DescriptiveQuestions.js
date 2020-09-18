import React, { useState } from "react";
import Questions from "./Questions";

function DescriptiveQuestions({
  questionsDescriptive,
  setQuestionsDescriptive,
}) {
  const [numerikDescriptive, setNumerikDescriptive] = useState(false);
  const [kategorikDescriptive, setKategorikDescriptive] = useState(false);

  return (
    <div className="questions">
      {kategorikDescriptive ? <p>KATEGORIK! EDIT JADI RUMUS KATEGORIK</p> : null}

      {numerikDescriptive ? <p>Numerik!!! tunjukin rumus numerik</p> : null}

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
