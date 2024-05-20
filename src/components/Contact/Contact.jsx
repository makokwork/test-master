import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { red } from '@mui/material/colors';
function Contact() {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsAgreed(event.target.checked);
  };

  return (
    <section className="section container-about">
      <div className="desktop-overlay__body">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Accedf926fee26ab90dfb631bf8abcd59acb469f774dc5c4ecffb5c9605fc1f90&amp;source=constructor"
          width="600"
          height="450"
          frameborder="0"></iframe>
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
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={isAgreed}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="agree">
                    Нажимая кнопку "Отправить", Вы соглашаетесь с нашей{' '}
                    <NavLink to="/policy">политикой конфиденциальности</NavLink>
                  </label>
                </div>
                <div className="message__buttons">
                  <Button variant="outlined" className="button-close">
                    Закрыть окно
                  </Button>
                  <button className="message-button button transparent" type="submit">
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Contact;
