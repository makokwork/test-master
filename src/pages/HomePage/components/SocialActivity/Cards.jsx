function Cards() {
  return (
    <ul className="cards__list grid grid--3">
      <li className="cards__item">
        <article className="cards-card">
          <div className="cards-card__body">
            <h3 className="cards-card__title">Помощь людям</h3>

            <img src="./images/icons/1.svg" alt="" className="cards-card__image" loading="lazy" />
          </div>
        </article>
      </li>

      <li className="cards__item">
        <article className="cards-card">
          <div className="cards-card__body">
            <h3 className="cards-card__title">Гуманитарные сборы</h3>

            <img src="./images/icons/2.svg" alt="" className="cards-card__image" loading="lazy" />
          </div>
        </article>
      </li>

      <li className="cards__item">
        <article className="cards-card">
          <div className="cards-card__body">
            <h3 className="cards-card__title">Единство народа</h3>

            <img src="./images/icons/3.svg" alt="" className="cards-card__image" loading="lazy" />
          </div>
        </article>
      </li>

      <li className="cards__item">
        <article className="cards-card">
          <div className="cards-card__body">
            <h3 className="cards-card__title">Сборы нуждающимся в медпомощи</h3>

            <img src="./images/icons/4.svg" alt="" className="cards-card__image" loading="lazy" />
          </div>
        </article>
      </li>

      <li className="cards__item">
        <article className="cards-card">
          <div className="cards-card__body">
            <h3 className="cards-card__title">Мир и добро</h3>

            <img src="./images/icons/5.svg" alt="" className="cards-card__image" loading="lazy" />
          </div>
        </article>
      </li>

      <li className="cards__item">
        <article className="cards-card">
          <div className="cards-card__body">
            <h3 className="cards-card__title">Финансовая помощь</h3>

            <img src="./images/icons/6.svg" alt="" className="cards-card__image" loading="lazy" />
          </div>
        </article>
      </li>

      <li className="cards__item">
        <article className="cards-card">
          <div className="cards-card__body">
            <h3 className="cards-card__title">Патриотические программы</h3>
            <img src="./images/icons/7.svg" alt="" className="cards-card__image" loading="lazy" />
          </div>
        </article>
      </li>

      <li className="cards__item">
        <article className="cards-card">
          <div className="cards-card__body">
            <h3 className="cards-card__title">Освещение проблем</h3>

            <img src="./images/icons/8.svg" alt="" className="cards-card__image" loading="lazy" />
          </div>
        </article>
      </li>

      <li className="cards__item">
        <article className="cards-card">
          <div className="cards-card__body">
            <h3 className="cards-card__title">Воспитание</h3>

            <img src="./images/icons/9.svg" alt="" className="cards-card__image" loading="lazy" />
          </div>
        </article>
      </li>
    </ul>
  );
}

export default Cards;
