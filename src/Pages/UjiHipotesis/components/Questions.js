import React from "react";
import "./Questions.css";
import { Button } from "../../../components/Button/Button";

function Questions({ question, options }) {
  console.log(options);
  options.map((x) => console.log("x", x));

  return (
    <div className="questions">
      <h1 className="questions__title">{question}</h1>

      <div className="questions__options">
        {options.map((option) => {
          return (
            <div className="questions__options">
              <Button buttonStyle="btn--evoblue">{option}</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
