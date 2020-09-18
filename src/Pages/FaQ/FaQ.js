import React from "react";
import "./faq.css";

function FaQ() {
  return (
    <div className="faq__container">
      <div className="questions">
        <h2 className="faq__title">Variabel Bebas dan Variabel Terikat</h2>
        <div className="faq__text">
          <p>
            Variabel bebas (independent variable) merupakan variabel yang dapat
            kamu sesuaikan untuk mendapatkan hasil tertentu. Variabel ini
            merupakan input dalam penelitian yang akan memengaruhi hasil
            penelitian.
          </p>
          <p>
            Variabel terikat (dependent variable) merupakan variabel target
            penelitianmu. Variabel ini merupakan output yang diukur sebagai
            hasil penelitian.
          </p>
          <img
            style={{ maxWidth: "100%" }}
            src="/images/diagramvbvt.jpg"
            alt="diagram 1"
          />
          <p>
            Ingat, bedakan variabel dengan kelompok! (lihat juga dikotom vs
            polikotom)
          </p>
        </div>
      </div>

      <div className="questions">
        <h2 className="faq__title">Variabel Kategorik dan Variabel Numerik</h2>
        <div className="faq__text">
          <p>
            <p>
              Berdasarkan jenis datanya, variabel terdiri atas variabel
              kategorik dan numerik. <strong>Variabel kategorik</strong>{" "}
              merupakan variabel yang berisi <strong>kategori,</strong> bisa
              berupa{" "}
              <strong>
                <em>ranking</em> (ordinal)
              </strong>{" "}
              maupun <strong>setara (nominal). Variabel numerik</strong>{" "}
              merupakan variabel yang berisikan{" "}
              <strong>bilangan hitung.</strong>
            </p>
          </p>
          <p>
            Hati-hati dalam membedakan <em>variabel kategorik ordinal</em>{" "}
            dengan <em>variabel numerik</em>! Beberapa orang keliru dalam
            membedakannya.
          </p>
        </div>
      </div>

      <div className="questions">
        <h2 className="faq__title">Variabel Kategorik Dikotom vs Polikotom</h2>
        <div className="faq__text">
          <p>
            Kelompok merupakan kategori dalam suatu variabel. Sebuah variabel
            dapat memiliki dua atau lebih kelompok. Variabel yang terdiri atas
            dua kelompok disebut sebagai variabel dikotom. Sedangkan variabel
            yang terdiri atas lebih dari dua kelompok disebut sebagai variabel
            polikotom.
          </p>
        </div>
      </div>

      <div className="questions">
        <h2 className="faq__title">Berpasangan dan Tidak Berpasangan</h2>
        <div className="faq__text">
          <p>
          Suatu variabel dikatakan berpasangan apabila seluruh set data variabel tersebut didapatkan dari objek penelitian yang sama. Sementara itu, suatu variabel dikatakan tidak berpasangan apabila seluruh set data variabel tersebut didapatkan dari objek penelitian yang berbeda.
          </p>
        </div>
      </div>

      <div className="questions">
        <h2 className="faq__title">Data Berdistribusi Normal dan Tidak Normal</h2>
        <div className="faq__text">
          <p>
          Data numerik memiliki karakteristik tertentu bila didistribusikan (disebarkan). Bila bentuk distribusi  (persebaran) menyerupai grafik berbentuk lonceng, data tersebut dikatakan berdistribusi normal. Begitu juga sebaliknya, bila bentuk distribusi  (persebaran) tidak menyerupai grafik berbentuk lonceng, data tersebut dikatakan tidak berdistribusi normal. Penting bagi peneliti untuk mengetahui apakah data numeriknya terdistribusi normal atau tidak karena hal ini akan memengaruhi uji hipotesis yang akan digunakan.
          </p>
          <img 
          style={{ maxWidth: "100%" }}
          src="images/distribusi-normal.jpg" alt="distribusi normal" srcset=""/>
          <p>Data numerik memiliki karakteristik tertentu bila didistribusikan (disebarkan). Bila bentuk distribusi  (persebaran) menyerupai grafik berbentuk lonceng, data tersebut dikatakan berdistribusi normal. Begitu juga sebaliknya, bila bentuk distribusi  (persebaran) tidak menyerupai grafik berbentuk lonceng, data tersebut dikatakan tidak berdistribusi normal. Penting bagi peneliti untuk mengetahui apakah data numeriknya terdistribusi normal atau tidak karena hal ini akan memengaruhi uji hipotesis yang akan digunakan.</p>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default FaQ;
