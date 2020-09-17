import React from "react";
import "./Questions.css";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";



function Questions({ number, question, options, setQuestions, questions, answers, setAnswers }) {
  

  const handleClick = (option, number) => {
    console.log("option: ", option);
    console.log("number: ", number);
    // answers[number] = option;
    // console.log("answers", answers[1], answers[2], answers[3]);
    setAnswers({
      ...answers,
      [number]: option,
    })

    console.log('As: ', answers);

  };

  return (
    <div className="questions">
      <ReactTooltip />
      <p
        style={{
          color: "grey",
          marginBottom: 0,
        }}
      >
        Pertanyaan ke-{number}
      </p>
      <div className="questions__head">
        <h1 className="questions__title">{question}</h1>
        <div className="questions__ask">
          <Link
            data-tip="Pelajari lebih lanjut"
            className="questions__question"
          >
            Apa ini?
          </Link>
        </div>
      </div>
      <div className="questions__options">
        {options.map((option) => {
          return (
            <div className="questions__options">
              <div
                className={
                  (answers[number] === option)
                    ? `active questions__button`
                    : `questions__button`
                }
                onClick={() => handleClick(option, number)}
              >
                {option}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;

// {/* <div className={selected ? (`questions__options`): (`questions__options active`)}> */}
// render 'active' class kalo answers[number] == option