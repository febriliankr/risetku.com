import React from "react";
import './Konsultasi.css'

function Konsultasi() {
  return (
    <div className="konsultasi__container">
      <div className="konsultasi__text">
        <div className="konsultasi__subsection-container">
          <h2 className="konsultasi__text-header">Konsultasi</h2>
          <p className="konsultasi__subsection-text">
            Risetku menyediakan ruang bagi peneliti yang ingin berkonsultasi
            dengan konsultan penelitian yang ahli di bidangnya dengan biaya yang
            sangat terjangkau. Untuk saat ini kami masih mengembangkan bagian
            ini.
          </p>
          <p className="konsultasi__subsection-text">
            Seluruh pertanyaan Anda bisa dikirimkan ke email: risetku@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Konsultasi;
