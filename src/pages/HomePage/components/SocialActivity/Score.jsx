function Score() {
  return (
    <div className="score">
      <h2 className="score__title" id="third-section">
        Цифры говорят сами за себя - это наши ценности...
      </h2>
      <ul className="score__list grid grid--4">
        <li className="score__item">
          <article className="score-card score-bg-1">
            <div className="score-card__body">
              <h3 className="score-card__title">8+</h3>
              <p>лет мы помогаем людям, кто действительно попал в беду</p>
            </div>
          </article>
        </li>

        <li className="score__item">
          <article className="score-card score-bg-2">
            <div className="score-card__body">
              <h3 className="score-card__title">100+</h3>
              <p>успешных благотворительных акций</p>
            </div>
          </article>
        </li>

        <li className="score__item">
          <article className="score-card score-bg-3">
            <div className="score-card__body">
              <h3 className="score-card__title">100%</h3>
              <p>людей, что обратились к нам получили нужную помощь</p>
            </div>
          </article>
        </li>

        <li className="score__item">
          <article className="score-card score-bg-4">
            <div className="score-card__body">
              <h3 className="score-card__title">200 000</h3>
              <p>человек уже поддержали наш фонд</p>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
}

export default Score;
