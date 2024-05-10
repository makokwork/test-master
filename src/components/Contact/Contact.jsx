function Contact() {
  return (
    <section className="section container-about">
      <div className="desktop-overlay__body">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2709.4816009702677!2d39.70111027670554!3d47.22672481413219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0KDQvtGB0YLQvtCy0YHQutCw0Y8g0L7QsdC7LCDQsy7Qvi4g0LPQvtGA0L7QtCDQoNC-0YHRgtC-0LIt0L3QsC3QlNC-0L3Rgywg0LMg0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YMsINC_0YAt0LrRgiDQkdGD0LTQtdC90L3QvtCy0YHQutC40LksINC30LQuIDgwLCDQvtGE0LjRgSAxMTI2!5e0!3m2!1sru!2sru!4v1712820601527!5m2!1sru!2sru"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        <section className="message">
          <div className="message-inner container">
            <div className="message-body">
              <h3 className="message-title">Связаться с нами</h3>
              <div className="message-description">
                <p>
                  <b>Заполните поля ниже, чтобы мы могли связаться с Вами как можно скорее</b>
                </p>
              </div>

              <form className="message-form">
                <div className="message-form-body">
                  <label className="visually-hidden" htmlFor="name">
                    ФИО
                  </label>
                  <input type="text" className="message-input input" id="name" placeholder="ФИО" />

                  <label className="visually-hidden" htmlFor="email">
                    Электронная почта
                  </label>
                  <input
                    type="email"
                    className="message-input input"
                    id="email"
                    placeholder="Электронная почта"
                  />

                  <label className="visually-hidden" htmlFor="phone">
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    className="message-input input"
                    id="phone"
                    placeholder="Номер телефона"
                  />

                  <label className="visually-hidden" htmlFor="message">
                    Сообщение
                  </label>
                  <textarea id="message" name="message" placeholder="Сообщение"></textarea>
                </div>
                <button className="message-button button transparent" type="submit">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Contact;
