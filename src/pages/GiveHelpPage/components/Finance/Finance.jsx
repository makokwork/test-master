import TrustPlatforms from '../../../HomePage/components/Trust/TrustPlatforms';
function Finance() {
  return (
    <section className="section container-about">
      <header className="section__header givehelp">
        <TrustPlatforms />
      </header>

      <div className="section__body finance">
        <h3 className="visually-hidden">Карты для пожертвований</h3>
        <div className="cards__container">
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
