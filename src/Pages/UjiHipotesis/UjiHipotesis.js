import React from "react";
import "./UjiHipotesis.css";
import { useLocation } from "react-router-dom";
import WelcomeText from "./components/WelcomeText";
import Questions from "./components/Questions";

function UjiHipotesis() {
  const location = useLocation();
  const question = "Berapa jumlah variabel bebas Anda?";
  const options = ["Satu", "Dua atau lebih"];
  return (
    <div className="uji-hipotesis__container">
      
        {location.pathname === "/uji-hipotesis/mulai" ? (
          <Questions question={question} options={options} />
        ) : (
          <WelcomeText />
        )}
      
    </div>
  );
}

export default UjiHipotesis;
