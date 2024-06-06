function Finance() {
  return (
    <section className="section container-about">
      <header className="section__header">
        <h2 className="section__title">Каждый может помочь</h2>
      </header>
      <div className="section__body finance">
        <h3 className="visually-hidden">Карты для пожертвований</h3>
        <div className="cards__container">
          <div className="cards__container-bank">
            <div className="cards__container-bank-title">
              <h4>Для физических лиц</h4>
            </div>
            <div className="cards__container-bank-inner">
              <div className="cards__container-bank-sber">
                <img src="/images/SBER 1.svg" alt="Логотип Сбербанка" />
                <h5>Перевод на карту</h5>
                <p>
                  Сбербанк онлайн: <br /> <b>2202422225835708</b> <br /> Имя Отчество Ф.
                </p>
              </div>

              <div className="cards__container-bank-tinkoff">
                <img src="/images/tinkoff.svg" alt="Логотип Тинкоффа" />
                <h5>Перевод на карту</h5>
                <p>
                  Тинкофф онлайн: <br /> <b>2202422225835708</b> <br /> Имя Отчество Ф.
                </p>
              </div>
            </div>
          </div>

          <div className="cards__container-document">
            <h3>Для юридических лиц</h3>
            <p>Принять участие в нашей деятельности</p>
            <button className="cards__container-button button" type="button">
              Скачать реквизиты
            </button>
          </div>
        </div>

        <div className="cards__container-link">
          <a href="../images/test.pdf" target="_blank">
            Публичная оферта о добровольном пожертвовании
          </a>
        </div>
      </div>
    </section>
  );
}

export default Finance;
