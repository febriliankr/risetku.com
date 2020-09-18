import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

function Landing() {
  return (
    <div className="landing__container">
      <section className="landing__text">
        <h1 className="landing__text-header">
          Aplikasi untuk memudahkan analisis penelitian Anda
        </h1>
        <p className="landing__text-description">
          Hitung besar sampel, tentukan jenis uji hipotesis, dan konsultasi
          mengenai penelitian anda.
        </p>
        <div className="landing__buttons">
          <div className="landing__buttons-individual">
            <Link to="/uji-hipotesis">
              <Button buttonStyle="btn--evoblue">Uji Hipotesis</Button>
            </Link>
          </div>
          <div className="landing__buttons-individual">
            <Link to="/hitung-besar-sampel">
              <Button buttonStyle="btn--evoblue">Hitung Besar Sampel</Button>
            </Link>
          </div>
        </div>
        <Link to="/konsultasi" className="landing__ask">
          Saya belum tau apa yang harus dilakukan
        </Link>
        <img
          src="images/astronaut-illustration.svg"
          alt="Research Illustration"
          className="landing__image"
        />
      </section>
      <section className="landing__text">
      <h1>Tentang Risetku.com</h1>
        <p className="landing__text-description">
          Risetku.com didirikan oleh Elvan Wiyarta (FKUI'17) dan Febrilian
          Kristiawan (FKUI'17) dengan tujuan membuat proses analisis penelitian lebih mudah.
        </p>
      </section>
    </div>
  );
}

export default Landing;
