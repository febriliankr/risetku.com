import React from "react";
import "./UjiHipotesis.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

function UjiHipotesis() {
  return (
    <div className="landing__container">
      <section className="landing__text">
        <h1 className="landing__text-header gradient-text">
        Uji Hipotesis
        </h1>
        <p className="uji-hipotesis__text-description">
          Uji hipotesis adalah metode pengambilan keputusan dari suatu hipotesis
          penelitian. Uji hipotesis juga terkadang disebut uji signifikansi, uji
          p-value, konfirmasi analisis data, dan lain-lain. Dengan menggunakan
          uji hipotesis yang tepat, kita mampu untuk menentukan apakah hipotesis
          kita diterima atau tidak.
        </p>
        <div className="landing__buttons">
          <Link to="/uji-hipotesis">
            <Button buttonStyle="btn--evoblue">Mulai Uji Hipotesis</Button>
          </Link>
          <Link to="/uji-hipotesis">
            <Button buttonStyle="btn--evoblue">Pelajari Lebih Lanjut</Button>
          </Link>
        </div>
        <Link to="/konsultasi" className="landing__ask">
          Saya belum tau apa yang harus dilakukan
        </Link>
        <img
          src="images/cover-vector.svg"
          alt="Research Illustration"
          className="landing__image"
        />
      </section>
    </div>
  );
}

export default UjiHipotesis;
