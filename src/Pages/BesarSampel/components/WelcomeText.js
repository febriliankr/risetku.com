import React from "react";
import { Button } from "../../../components/Button/Button";

function WelcomeText({
  setMulai,
  title,
  description,
  selesai,
  answers,
  outputToPage,
  buttonText,
  foundOutput,
}) {
  window.scrollTo(0, 0);
  return (
    <>
      <section className="uji-hipotesis__text">
        {selesai ? (
          <>
            {!(outputToPage.length > 0) ? (
              <h3>
              Tidak ditemukan rumus yang sesuai.
                </h3>
            ) : (
              <>
                <h3>
                  Temukan rumus besar sampel yang cocok untuk penelitian anda
                  adalah
                </h3>
                <h1>{outputToPage}</h1>
                <p>{JSON.stringify(answers)}</p>
              </>
            )}
          </>
        ) : (
          <>
            <h1 className="uji-hipotesis__text-header">{title}</h1>
            <p className="uji-hipotesis__text-description">{description}</p>
            <div className="uji-hipotesis__buttons">
              <Button onClick={() => setMulai(true)} buttonStyle="btn--evoblue">
                {buttonText}
              </Button>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default WelcomeText;
