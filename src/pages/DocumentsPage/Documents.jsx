import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Documents() {
  return (
    <>
      <Header />
      <section className="section container-about">
        <header className="section__header">
          <h2 className="section__title">Документы</h2>
          <h3 className="visually-hidden">Скачивание документов</h3>
        </header>
        <div className="section__body">
          <div className="documents"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Documents;
