import { NavLink } from 'react-router-dom';
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footer container">
      <div className="footer__inner">
        <div className="footer__navigation">
          <nav className="footer__menu">
            <div className="footer__socials">
              <ul className="socials__list-first">
                <h5>Компания</h5>
                <li className="socials__item">
                  <NavLink to="/" className="socials__link" onClick={scrollToTop}>
                    Компания
                  </NavLink>
                </li>
                <li className="socials__item">
                  <NavLink to="/about" className="socials__link" onClick={scrollToTop}>
                    О нас
                  </NavLink>
                </li>
                <li className="socials__item">
                  <NavLink to="/projects" className="socials__link" onClick={scrollToTop}>
                    Проекты
                  </NavLink>
                </li>
              </ul>

              <ul className="socials__list-second">
                <h5>Документы</h5>
                <li className="socials__item">
                  <NavLink to="/documents" className="socials__link" onClick={scrollToTop}>
                    Документы
                  </NavLink>
                </li>
                <li className="socials__item">
                  <NavLink to="/reports" className="socials__link" onClick={scrollToTop}>
                    Отчеты
                  </NavLink>
                </li>
                <li className="socials__item">
                  <NavLink to="/policy" className="socials__link" onClick={scrollToTop}>
                    Политика <br /> конфиденциальности
                  </NavLink>
                </li>
              </ul>

              <ul className="socials__list-third">
                <h5>Обращение к нам</h5>
                <li className="socials__item">
                  <NavLink to="/gethelp" className="socials__link" onClick={scrollToTop}>
                    Получить помощь
                  </NavLink>
                </li>
                <li className="socials__item">
                  <NavLink to="/givehelp" className="socials__link" onClick={scrollToTop}>
                    Помочь
                  </NavLink>
                </li>
              </ul>
              <ul className="socials__list-fourth">
                <h5>Новости</h5>
                <li className="socials__item">
                  <NavLink to="/blog" className="socials__link" onClick={scrollToTop}>
                    Блог
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="footer__body">
          <h3>Напишите нам</h3>
          <NavLink to="/" className="footer__body-hyperlink">
            edinstvozov@yandex.ru
          </NavLink>

          <div className="footer__body-extra">
            <ul className="extra-list">
              <li className="extra-list__item">
                <p>© Центр Единство - 2024</p>
              </li>
            </ul>

            <ul className="extra-list">
              <li className="extra-list__item">
                <NavLink to="">
                  <img
                    src="/images/icons/whatsapp.svg"
                    alt="Ватсапп"
                    width="26"
                    height="26"
                    loading="lazy"
                  />
                </NavLink>
              </li>

              <li className="extra-list__item">
                <NavLink to="https://vk.com/club108684224">
                  <img
                    src="/images/icons/vk.svg"
                    alt="Вконтакте"
                    width="26"
                    height="26"
                    loading="lazy"
                  />
                </NavLink>
              </li>

              <li className="extra-list__item">
                <NavLink to="https://t.me/voinstvoXristovo">
                  <img
                    src="/images/icons/telegram.svg"
                    alt="Телеграм"
                    width="26"
                    height="26"
                    loading="lazy"
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
