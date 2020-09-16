import React from "react";
import "./BesarSampel.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

function BesarSampel() {
  return (
    <>
    <div className="uji-hipotesis__container">
      <section className="uji-hipotesis__text">
        <h1 className="uji-hipotesis__text-header gradient-text">
          Hitung Besar Sampel
        </h1>
        <p className="uji-hipotesis__text-description">
          Temukan rumus besar sampel yang cocok untuk penelitianmu dan hitung
          jumlahnya dengan menjawab beberapa pertanyaan berikut!
        </p>

        <div className="uji-hipotesis__buttons">
          <Link to="/hitung-besar-sampel/calculate">
            <Button buttonStyle="btn--evoblue">
              Mulai Hitung Besar Sampel
            </Button>
          </Link>
        </div>
      </section>

    </div>
    <div className="subsection__container">
        <h2 className="subsection__title">Apa itu besar sampel?</h2>
        <p className="subsection__text">
          Dalam memulai suatu penelitian, peneliti tentu perlu menentukan sampel
          penelitiannya. Salah satu hal yang paling penting untuk ditentukan
          adalah besar sampel minimal dalam penelitian agar suatu penelitian
          dikatakan memiliki hasil yang valid.
        </p>
        <p className="subsection__text">
          Besar sampel minimal ini dapat ditentukan dengan berbagai rumus.
          Masing-masing penelitian memiliki rumus besar sampel. Peneliti perlu
          mengetahui rumus besar sampel yang sesuai untuk mencapai penelitian
          yang optimal.
        </p>
      </div>
    </>
  );
}

export default BesarSampel;
