import React from "react";
import "./subsection.css";

function Subsection({ title, text }) {
  return (
    <div>
      <div className="subsection__container">
        <h2 className="subsection__title">{title}</h2>
        {Object.keys(text).map((p) => {
          return <p className="subsection__text">{text[p]}</p>;
        })}
      </div>
    </div>
  );
}

export default Subsection;
