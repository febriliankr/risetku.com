import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/Button";

function WelcomeText() {
  return (
    <>
      <section className="uji-hipotesis__text">
        <h1 className="uji-hipotesis__text-header">Uji Hipotesis</h1>
        <p className="uji-hipotesis__text-description">
          Uji hipotesis adalah metode pengambilan keputusan dari suatu hipotesis
          penelitian. Uji hipotesis yang tepat dapat menentukan apakah hipotesis
          kita diterima atau tidak.
        </p>

        <div className="uji-hipotesis__buttons">
          <Link to="/uji-hipotesis/mulai">
            <Button buttonStyle="btn--evoblue">Mulai Uji Hipotesis</Button>
          </Link>
        </div>
        <Link to="/konsultasi" className="uji-hipotesis__ask">
          *juga disebut uji signifikansi, uji p-value, konfirmasi analisis data,
          dan lain-lain.
        </Link>
      </section>
    </>
  );
}

export default WelcomeText;
