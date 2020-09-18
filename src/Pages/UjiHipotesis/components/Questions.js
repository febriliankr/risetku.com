import React from "react";
import "./Questions.css";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

function Questions({
  number,
  question,
  options,
  setQuestions,
  questions,
  answers,
  setAnswers,
  onChange,
  enableKeduanya3,
}) {
  const handleClick = (option, number) => {
    console.log("option: ", option);
    console.log("number: ", number);
    // answers[number] = option;
    // console.log("answers", answers[1], answers[2], answers[3]);
    setAnswers({
      ...answers,
      [number]: option,
    });
  };

  // const renderSwitch() {
  //   switch() {
  //     case 'foo':
  //       return 'bar';
  //     default:
  //       return 'foo';
  //   }
  // }

  return (
    <>
      <div className="questions">
        <ReactTooltip />
        <div className="questions__head">
          <h2 className="questions__title">{question}</h2>
        </div>
        <div className="questions__options">
          {options.map((option) => {
            const enableKeduanya = ((!enableKeduanya3) && (option === "Keduanya")) ;
            console.log('enableKeduanya', enableKeduanya);
            return (
              <div className="questions__option-buttons">
                <div
                  className={`${
                    answers[number] === option
                      ? `active-question questions__button`
                      : `questions__button`
                  } ${enableKeduanya ? `questions__button-hidden` : null}`}
                  onClick={() => handleClick(option, number)}
                >
                  {option}
                </div>

                {/* <div
                  className={
                    answers[number] === option
                      ? `active-question questions__button`
                      : `questions__button`
                  }
                  onClick={() => handleClick(option, number)}
                >
                  {option}
                </div> */}
              </div>
            );
          })}
        </div>
        <div className="questions__ask">
          <Link
            data-tip="Pelajari lebih lanjut"
            className="questions__question"
            to="/faq"
          >
            Apa ini?
          </Link>
        </div>
      </div>
    </>
  );
}

export default Questions;
