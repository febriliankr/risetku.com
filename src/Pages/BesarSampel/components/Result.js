import React from "react";
import dataLegenda from "../data/dataLegenda";

function Result({ outputToPage }) {
  const cleanOutput = outputToPage.slice(1, outputToPage.length - 1);

  function createMarkup() {
    return { __html: dataLegenda[cleanOutput] };
  }
  
  return (
    <>
    
      {cleanOutput === "Tidak ditemukan rumus yang sesuai." ? (
        <>
          <h1>{cleanOutput} 😭</h1>
        </>
      ) : (
        <>
        <div className="questions">
          <h2
            style={{color: '#e9e9e9'}}
          >Berikut adalah rumus besar sampel minimal yang sesuai dengan penelitian Anda ({cleanOutput})</h2>
          <img
            style={{
              maxWidth: "100%",
            }}
            src={`images/rumus/rumus${cleanOutput}.jpg`}
            alt="rumus"
          />
          </div>
          <div className="questions-left">
          <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
        </>
      )}
    
    </>
  );
}

export default Result;

