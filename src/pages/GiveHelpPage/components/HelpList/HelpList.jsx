function HelpList() {
  return (
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
                        Некоторые приложения умеют подгружать QR-код из галереи смартфона (вы можете
                        сделать скриншот QR-кода и подгрузить его в приложении).
                      </p>
                      <p>
                        В приложении "Сбербанк-Онлайн" эта опция называется "Сканировать из файла".
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

export default HelpList;
