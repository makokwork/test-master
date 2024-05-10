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
          <div className="documents">
            <ul className="documents__list">
              <li className="documents__item documents-page">
                <h4 className="documents__accordion-title">Устав АНО «Центр Единство» </h4>
                <a href="/">Скачать</a>
              </li>

              <li className="documents__item documents-page">
                <h4 className="documents__accordion-title">
                  Свидетельство о государственной регистрации юридического лица
                </h4>
                <a href="/">Скачать</a>
              </li>
              <li className="documents__item documents-page">
                <h4 className="documents__accordion-title">
                  Свидетельство о государственной регистрации некоммерческой организации
                </h4>
                <a href="/">Скачать</a>
              </li>
              <li className="documents__item documents-page">
                <h4 className="documents__accordion-title">
                  Свидетельство о постановке на учет российской организации в налоговом органе
                  <br />
                  по месту её нахождения
                </h4>
                <a href="/">Скачать</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Documents;
