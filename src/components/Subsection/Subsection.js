import React from "react";
import "./subsection.css";

function Subsection({
    title,
    text
}) {
  return (
    <div>
      <div className="subsection__container">
        <h2 className="subsection__title">Apa itu besar sampel?</h2>
        <h2 className="subsection__title">{title}</h2>
        <p className="subsection__text">{text}</p>
        <p className="subsection__text">
          Dalam memulai suatu penelitian, peneliti tentu perlu menentukan sampel
          penelitiannya. Salah satu hal yang paling penting untuk ditentukan
          adalah besar sampel minimal dalam penelitian agar suatu penelitian
          dikatakan memiliki hasil yang valid.
        </p>
        <p className="subsection__text">
          Besar sampel minimal ini dapat ditentukan dengan berbagai rumus.
          Masing-masing penelitian memiliki rumus besar sampel. Peneliti perlu
          mengetahui rumus besar sampel yang sesuai untuk mencapai penelitian
          yang optimal.
        </p>
      </div>
    </div>
  );
}

export default Subsection;
