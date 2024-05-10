function GetHelpList() {
  return (
    <section className="section container-about">
      <header className="section__header">
        <h2 className="section__title">Получить помощь</h2>
        <h3 className="section__description">Ответы на наиболее часто задаваемые вопросы </h3>
      </header>
      <div className="section-main-gethelp container">
        <div className="section-main-gethelp__body">
          <div className="gethelp">
            <ul className="gethelp__list">
              <li className="gethelp__item">
                <details className="gethelp__accordion">
                  <summary className="gethelp__accordion-header">
                    <h4 className="gethelp__accordion-title">Как попасть к вам на консультацию?</h4>
                    <span className="gethelp__accordion-indicator"></span>
                  </summary>
                  <div className="gethelp__accordion-body">
                    <p>
                      Личный прием возможен только по предварительной записи. Запись на прием
                      ведется в соответствии с графиком приема по телефону: +7(908)188-16-17
                    </p>
                  </div>
                </details>
              </li>

              <li className="gethelp__item">
                <details className="gethelp__accordion">
                  <summary className="gethelp__accordion-header">
                    <h4 className="gethelp__accordion-title">
                      На какой e-mail можно переслать необходимые документы?
                    </h4>
                    <span className="gethelp__accordion-indicator"></span>
                  </summary>
                  <div className="gethelp__accordion-body">
                    <p>
                      Личный прием возможен только по предварительной записи. Запись на прием
                      ведется в соответствии с графиком приема по телефону: +7(908)188-16-17
                    </p>
                  </div>
                </details>
              </li>

              <li className="gethelp__item">
                <details className="gethelp__accordion">
                  <summary className="gethelp__accordion-header">
                    <h4 className="gethelp__accordion-title">Кто может обратиться за помощью?</h4>
                    <span className="gethelp__accordion-indicator"></span>
                  </summary>
                  <div className="gethelp__accordion-body">
                    <p>
                      Личный прием возможен только по предварительной записи. Запись на прием
                      ведется в соответствии с графиком приема по телефону: +7(908)188-16-17
                    </p>
                  </div>
                </details>
              </li>

              <li className="gethelp__item">
                <details className="gethelp__accordion">
                  <summary className="gethelp__accordion-header">
                    <h4 className="gethelp__accordion-title">
                      Как я могу получить консультацию, если нахожусь не в Ростове-на-Дону?
                    </h4>
                    <span className="gethelp__accordion-indicator"></span>
                  </summary>
                  <div className="gethelp__accordion-body">
                    <p>
                      Личный прием возможен только по предварительной записи. Запись на прием
                      ведется в соответствии с графиком приема по телефону: +7(908)188-16-17
                    </p>
                  </div>
                </details>
              </li>

              <li className="gethelp__item">
                <details className="gethelp__accordion">
                  <summary className="gethelp__accordion-header">
                    <h4 className="gethelp__accordion-title">
                      Как можно передать документы, если являюсь инвалидом 1 группы, немобильный?
                    </h4>
                    <span className="gethelp__accordion-indicator"></span>
                  </summary>
                  <div className="gethelp__accordion-body">
                    <p>
                      Личный прием возможен только по предварительной записи. Запись на прием
                      ведется в соответствии с графиком приема по телефону: +7(908)188-16-17
                    </p>
                  </div>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetHelpList;
