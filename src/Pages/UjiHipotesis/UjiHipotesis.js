import React from "react";
import "./UjiHipotesis.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

function UjiHipotesis() {
  return (
    <div className="uji-hipotesis__container">
      <section className="uji-hipotesis__text">
        <h1 className="uji-hipotesis__text-header gradient-text">
        Uji Hipotesis
        </h1>
        <p className="uji-hipotesis__text-description">
          Uji hipotesis adalah metode pengambilan keputusan dari suatu hipotesis penelitian. Uji hipotesis yang tepat dapat menentukan apakah hipotesis kita diterima atau tidak.
        </p>
       
        <div className="uji-hipotesis__buttons">
          <Link to="/uji-hipotesis">
            <Button buttonStyle="btn--evoblue">Mulai Uji Hipotesis</Button>
          </Link>

        </div>
        <Link to="/konsultasi" className="uji-hipotesis__ask">
        *juga disebut uji signifikansi, uji p-value, konfirmasi analisis data, dan lain-lain.
        </Link>
      </section>
    </div>
  );
}

export default UjiHipotesis;
