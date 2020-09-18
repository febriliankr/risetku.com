import React from "react";

function Result({ outputToPage }) {
  const cleanOutput = outputToPage.slice(1, outputToPage.length - 1);

  return (
    <div className="questions">
      {cleanOutput === 0 ? (
        <>
        <h1>{cleanOutput}</h1>
        <p>tidak ditemukan :[</p>
        </>
      ) : (
        <>
          <h1>{cleanOutput}</h1>
          <img
            style={{
              maxWidth: "100%",
            }}
            src={`images/rumus/rumus${cleanOutput}.jpg`}
            alt="rumus"
          />
        </>
      )}
    </div>
  );
}

export default Result;
