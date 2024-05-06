import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Reports = () => {
  return (
    <div>
      <Header />
      <Hero />

      <section>
        <div className="section-main-reports container">
          <header className="section-main-reports__header">
            <h2 className="section-main-reports__title">
              Узнайте о нашей деятельности за последние годы
            </h2>
            <h3 className="visually-hidden">Просмотр отчетов</h3>
          </header>
          <div className="section-main-reports__body">
            <div className="reports">
              <ul className="reports__list">
                <li className="reports__item">
                  <details className="reports__accordion">
                    <summary className="reports__accordion-header">
                      <h4 className="reports__accordion-title">Отчёты за 2024 год</h4>
                      <span className="reports__accordion-indicator"></span>
                    </summary>
                    <div className="reports__accordion-body">
                      <div className="reports__accordion-body-title">
                        <h5>Отчеты по кварталам</h5>
                      </div>
                      <div className="reports__accordion-body-inner">
                        <p>Отчет за III квартал 2023 г. </p>

                        <button
                          className="reports__button button"
                          type="button"
                          onclick="handleClick()">
                          {' '}
                          Посмотреть{' '}
                        </button>
                      </div>
                    </div>

                    <div className="reports__accordion-body">
                      <div className="reports__accordion-body-inner">
                        <p>Отчет за II квартал 2023 г. </p>
                        <button
                          className="reports__button button"
                          type="button"
                          onclick="handleClick()">
                          {' '}
                          Посмотреть{' '}
                        </button>
                      </div>
                    </div>

                    <div className="reports__accordion-body">
                      <div className="reports__accordion-body-inner">
                        <p>Отчет за I квартал 2023 г. </p>
                        <button
                          className="reports__button button"
                          type="button"
                          onclick="handleClick()">
                          {' '}
                          Посмотреть{' '}
                        </button>
                      </div>
                    </div>
                    <div className="reports__accordion-button">
                      <button
                        className="reports__button button"
                        type="button"
                        onclick="handleClick()">
                        {' '}
                        Годовой отчет{' '}
                      </button>
                    </div>
                  </details>
                </li>

                <li className="reports__item">
                  <details className="reports__accordion">
                    <summary className="reports__accordion-header">
                      <h4 className="reports__accordion-title">Отчёты за 2023 год</h4>
                      <span className="reports__accordion-indicator"></span>
                    </summary>
                    <div className="reports__accordion-body">
                      <div className="reports__accordion-body-title">
                        <h5>Отчеты по кварталам</h5>
                      </div>
                      <div className="reports__accordion-body-inner">
                        <p>Отчет за III квартал 2023 г. </p>

                        <button
                          className="reports__button button"
                          type="button"
                          onclick="handleClick()">
                          {' '}
                          Посмотреть{' '}
                        </button>
                      </div>
                    </div>

                    <div className="reports__accordion-body">
                      <div className="reports__accordion-body-inner">
                        <p>Отчет за II квартал 2023 г. </p>
                        <button
                          className="reports__button button"
                          type="button"
                          onclick="handleClick()">
                          {' '}
                          Посмотреть{' '}
                        </button>
                      </div>
                    </div>

                    <div className="reports__accordion-body">
                      <div className="reports__accordion-body-inner">
                        <p>Отчет за I квартал 2023 г. </p>
                        <button
                          className="reports__button button"
                          type="button"
                          onclick="handleClick()">
                          {' '}
                          Посмотреть{' '}
                        </button>
                      </div>
                    </div>
                    <div className="reports__accordion-button">
                      <button
                        className="reports__button button"
                        type="button"
                        onclick="handleClick()">
                        {' '}
                        Годовой отчет{' '}
                      </button>
                    </div>
                  </details>
                </li>

                <li className="reports__item">
                  <details className="reports__accordion">
                    <summary className="reports__accordion-header">
                      <h4 className="reports__accordion-title">Отчёты за 2022 год</h4>
                      <span className="reports__accordion-indicator"></span>
                    </summary>
                    <div className="reports__accordion-body">
                      <div className="reports__accordion-body-title">
                        <h5>Отчеты по кварталам</h5>
                      </div>
                      <div className="reports__accordion-body-inner">
                        <p>Отчет за III квартал 2023 г. </p>

                        <button
                          className="reports__button button"
                          type="button"
                          onclick="handleClick()">
                          {' '}
                          Посмотреть{' '}
                        </button>
                      </div>
                    </div>

                    <div className="reports__accordion-body">
                      <div className="reports__accordion-body-inner">
                        <p>Отчет за II квартал 2023 г. </p>
                        <button
                          className="reports__button button"
                          type="button"
                          onclick="handleClick()">
                          {' '}
                          Посмотреть{' '}
                        </button>
                      </div>
                    </div>

                    <div className="reports__accordion-body">
                      <div className="reports__accordion-body-inner">
                        <p>Отчет за I квартал 2023 г. </p>
                        <button
                          className="reports__button button"
                          type="button"
                          onclick="handleClick()">
                          {' '}
                          Посмотреть{' '}
                        </button>
                      </div>
                    </div>

                    <div className="reports__accordion-button">
                      <button
                        className="reports__button button"
                        type="button"
                        onclick="handleClick()">
                        {' '}
                        Годовой отчет{' '}
                      </button>
                    </div>
                  </details>
                </li>

                <li className="reports__item">
                  <details className="reports__accordion">
                    <summary className="reports__accordion-header">
                      <h4 className="reports__accordion-title">Отчёты за 2021 год</h4>
                      <span className="reports__accordion-indicator"></span>
                    </summary>
                    <div className="reports__accordion-body">
                      <div className="reports__accordion-body-title">
                        <h5>Отчеты по кварталам</h5>
                      </div>
                      <div className="reports__accordion-body-inner">
                        <p>Отчет за III квартал 2023 г. </p>

                        <button
                          className="reports__button button"
                          type="button"
                          onclick="handleClick()">
                          {' '}
                          Посмотреть{' '}
                        </button>
                      </div>
                    </div>

                    <div className="reports__accordion-body">
                      <div className="reports__accordion-body-inner">
                        <p>Отчет за II квартал 2023 г. </p>
                        <button
                          className="reports__button button"
                          type="button"
                          onclick="handleClick()">
                          {' '}
                          Посмотреть{' '}
                        </button>
                      </div>
                    </div>

                    <div className="reports__accordion-body">
                      <div className="reports__accordion-body-inner">
                        <p>Отчет за I квартал 2023 г. </p>
                        <button
                          className="reports__button button"
                          type="button"
                          onclick="handleClick()">
                          {' '}
                          Посмотреть{' '}
                        </button>
                      </div>
                    </div>
                    <div className="reports__accordion-button">
                      <button
                        className="reports__button button"
                        type="button"
                        onclick="handleClick()">
                        {' '}
                        Годовой отчет{' '}
                      </button>
                    </div>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Reports;
