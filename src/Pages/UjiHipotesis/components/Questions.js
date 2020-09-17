import React from "react";
import "./Questions.css";
import { Button } from "../../../components/Button/Button";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

function Questions({ number, question, options }) {

  const handleClick = (e) => {
    console.log(e.target.innerHTML);
  }

  return (
    <div className="questions">
      <ReactTooltip />
      <p style={{
        color: 'grey',
        marginBottom: 0,
      }}>Pertanyaan ke-{number}</p>
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
              <Button buttonStyle="btn--evoblue" onClick={handleClick}>{option}</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
