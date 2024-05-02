function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__inner">
        <div className="footer__navigation">
          <nav className="footer__menu">
            <div className="footer__socials">
              <ul className="socials__list-first">
                <h5>Компания</h5>
                <li className="socials__item">
                  <a href="" className="socials__link">
                    Компания
                  </a>
                </li>
                <li className="socials__item">
                  <a href="" className="socials__link">
                    О нас
                  </a>
                </li>
                <li className="socials__item">
                  <a href="" className="socials__link">
                    Проекты
                  </a>
                </li>
              </ul>

              <ul className="socials__list-second">
                <h5>Документы</h5>
                <li className="socials__item">
                  <a href="" className="socials__link">
                    Документы
                  </a>
                </li>
                <li className="socials__item">
                  <a href="" className="socials__link">
                    Отчеты
                  </a>
                </li>
                <li className="socials__item">
                  <a href="" className="socials__link">
                    Политика <br /> конфиденциальности
                  </a>
                </li>
              </ul>

              <ul className="socials__list-third">
                <h5>Обращение к нам</h5>
                <li className="socials__item">
                  <a href="" className="socials__link">
                    Получить помощь
                  </a>
                </li>
                <li className="socials__item">
                  <a href="" className="socials__link">
                    Помочь
                  </a>
                </li>
              </ul>
              <ul className="socials__list-fourth">
                <h5>Новости</h5>
                <li className="socials__item">
                  <a href="" className="socials__link">
                    Блог
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="footer__body">
          <h3>Напишите нам</h3>
          <a href="/" className="footer__body-hyperlink">
            edinstvozov@yandex.ru
          </a>
          <p>
            Отправьте свой email <br /> для обратной связи
          </p>

          <div className="footer__body-textplaceholder">
            <label className="visually-hidden" htmlFor="email">
              Email
            </label>
            <input type="email" className="footer-input input" id="email" placeholder="Email" />
            <button className="footer__button button-footer">
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_688_162)">
                  <path d="M7.79492 1.94824L11.9616 6.1149L7.79492 10.2816" stroke="white" />
                  <path d="M1.96143 6.11523H11.6837" stroke="white" />
                </g>
                <defs>
                  <clipPath id="clip0_688_162">
                    <rect
                      width="12"
                      height="10"
                      fill="white"
                      transform="translate(0.97998 0.700195)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

          <div className="footer__body-extra">
            <ul className="extra-list">
              <li className="extra-list__item">
                <p>© Центр Единство - 2024</p>
              </li>
            </ul>

            <ul className="extra-list">
              <li className="extra-list__item">
                <a href="">
                  <img src="." alt="Ватсапп" width="26" height="26" />
                </a>
              </li>
            </ul>

            <ul className="extra-list">
              <li className="extra-list__item">
                <a href="https://vk.com/club108684224">
                  <img src="../images/icons/vk.png" alt="Вконтакте" width="26" height="26" />
                </a>
              </li>
            </ul>

            <ul className="extra-list">
              <li className="extra-list__item">
                <a href="https://t.me/voinstvoXristovo">
                  <img
                    src="../../images/icons/telegram.png"
                    alt="Телеграм"
                    width="26"
                    height="26"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
