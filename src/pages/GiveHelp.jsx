import React from 'react';

function GiveHelp() {
  return (
    <>
      <section className="section container-about">
        <header className="section__header">
          <h2 className="section__title">Каждый может помочь</h2>
        </header>
        <div className="section__body">
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
      <section className="section container-about">
        <div className="section-main-help container">
          <div className="section-main-help__body">
            <div className="help">
              <ul className="help__list">
                <li className="help__item">
                  <details className="help__accordion">
                    <summary className="help__accordion-header">
                      <h4 className="help__accordion-title">Перевод по QR коду</h4>
                      <span className="help__accordion-indicator"></span>
                    </summary>
                    <div className="help__accordion-body">
                      <div className="help__accordion-body-image">
                        <img src="/images/QRcode.svg" alt="QR код" width="142" height="142" />
                      </div>
                      <div className="help__accordion-body-text">
                        <ol className="help__accordion-list">
                          <li className="help__accordion-item">
                            <p>
                              Откройте свое банковское приложение, наведите смартфон на экран и
                              отсканируйте код.
                            </p>
                          </li>

                          <li className="help__accordion-item">
                            <p>
                              Если у вас "Сбербанк-Онлайн", то на вкладках "Платежи" или "Действия"
                              найдите кнопку "Оплата по QR-коду или штрихкоду" или "QR-код.
                              Сканировать".
                            </p>
                          </li>

                          <li className="help__accordion-item">
                            <p>Наведите камеру смартфона на QR-код, расположенный слева.</p>
                          </li>
                        </ol>
                        <p>
                          Некоторые приложения умеют подгружать QR-код из галереи смартфона (вы
                          можете сделать скриншот QR-кода и подгрузить его в приложении).{' '}
                        </p>
                        <p>
                          В приложении "Сбербанк-Онлайн" эта опция называется "Сканировать из
                          файла".
                        </p>
                        <p>
                          Все поля, необходимые для зачисления платежа, заполнятся автоматически. Вы
                          можете изменить сумму платежа на любую по вашему желанию и возможностям.
                        </p>
                        <p>
                          <b>ВАЖНО!</b> Проверьте, что в поле "Назначение платежа" указана фраза:
                          добровольное пожертвование на уставную деятельность АНО "Центр Единство"
                        </p>
                      </div>
                    </div>
                  </details>
                </li>

                <li className="help__item">
                  <details className="help__accordion">
                    <summary className="help__accordion-header">
                      <h4 className="help__accordion-title">Банковские реквизиты</h4>
                      <span className="help__accordion-indicator"></span>
                    </summary>
                    <div className="help__accordion-body">
                      <p>
                        Личный прием возможен только по предварительной записи. Запись на прием
                        ведется в соответствии с графиком приема по телефону: +7(908)188-16-17{' '}
                      </p>
                    </div>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section__body">
          <div className="shop">
            <div className="shop__title">
              <h3>Вы можете поддержать нас дополнительно</h3>
            </div>

            <div className="shop__inner">
              <div className="shop__inner-item">
                <div className="shop__inner-item-image">
                  <a href="./help-chat.html">
                    <img src="/images/shop2.png" alt="" />
                  </a>
                </div>
                <div className="shop__inner-item-description">
                  <h4>Блокнот "Центр Единство"</h4>
                  <p>150р</p>
                </div>
              </div>

              <div className="shop__inner-item">
                <div className="shop__inner-item-image">
                  <a href="./help-chat.html">
                    <img src="/images/shop2.png" alt="" />
                  </a>
                </div>
                <div className="shop__inner-item-description">
                  <h4>Блокнот "Центр Единство"</h4>
                  <p>150р</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GiveHelp;
