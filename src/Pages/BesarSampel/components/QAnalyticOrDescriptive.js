import React from "react";
import "./Questions.css";
import ReactTooltip from "react-tooltip";

function QAnalyticOrDescriptive({ setAnalytic, setDescriptive }) {
  return (
    <div className="questions">
      <ReactTooltip />
      <p
        style={{
          color: "grey",
          marginBottom: 0,
        }}
      >
        Analitik atau Deskriptif
      </p>
      <div className="questions__head">
        <h2 className="questions__title">
          Apakah jenis penelitian Anda? (Deskriptif atau Analitik)
        </h2>
      </div>
      <div className="questions__options">
        <div className="questions__options">
          <div style={{
              'margin-right': '15px'
          }}
          onClick={() => setAnalytic(true)} className="questions__button">
            Analitik
          </div>
          <div
            onClick={() => setDescriptive(true)}
            className="questions__button"
          >
            Deskriptif
          </div>
        </div>
      </div>
    </div>
  );
}

export default QAnalyticOrDescriptive;
