import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/Button";

function WelcomeText({
  setMulai,
  title,
  description,
  selesai,
  answers,
  outputToPage,
}) {
  window.scrollTo(0, 0);
  return (
    <>
      <section className="uji-hipotesis__text">
        {selesai ? (null) : (
          <>
            <h1 className="uji-hipotesis__text-header">{title}</h1>
            <p className="uji-hipotesis__text-description">{description}</p>
            <div className="uji-hipotesis__buttons">
              <Button onClick={() => setMulai(true)} buttonStyle="btn--evoblue">
                Mulai Uji Hipotesis
              </Button>
            </div>
            <Link to="/konsultasi" className="uji-hipotesis__ask">
              *juga disebut uji signifikansi, uji p-value, konfirmasi analisis
              data, dan lain-lain.
            </Link>
          </>
        )}
      </section>
    </>
  );
}

export default WelcomeText;
