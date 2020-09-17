import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/Button";

const osdsad = {
  1: "Satu",
  2: "Kategorik",
  3: "Dua kelompok (Dikotom)",
  4: "Tidak Berpasangan",
  5: "Dua atau lebih",
  6: "Numerik",
  7: "Tidak Normal",
};

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
        {selesai ? (
          <>
            <h3>Uji Hipotesis yang cocok untuk penelitian anda adalah</h3>
            <h1>{outputToPage}</h1>
            <p>{JSON.stringify(answers)}</p>
          </>
        ) : (
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
