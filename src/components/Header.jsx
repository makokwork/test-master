import React from 'react';
import LogoSvg from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo logo">
          <img
            src={LogoSvg}
            alt="Центр Единство"
            className="logo__image"
            width="75"
            height="46"
            loading="lazy"
          />
        </Link>
        <nav className="header__menu hidden-mobile">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <a href="/" className="header__menu-link current-page">
                Компания
              </a>
            </li>

            <li className="header__menu-item">
              <a href="/AboutUs" className="header__menu-link">
                О нас
              </a>
            </li>

            <li className="header__menu-item">
              <a href="/" className="header__menu-link">
                Проекты
              </a>
            </li>

            <li className="header__menu-item">
              <a href="./reports.html" className="header__menu-link">
                Отчеты
              </a>
            </li>

            <li className="header__menu-item">
              <a href="./documents.html" className="header__menu-link">
                Документы
              </a>
            </li>

            <li className="header__menu-item">
              <a href="./gethelp.html" className="header__menu-link">
                Получить помощь
              </a>
            </li>

            <li className="header__menu-item">
              <a href="./help.html" className="header__menu-link">
                Помочь другим
              </a>
            </li>

            <li className="header__menu-item">
              <a href="/" className="header__menu-link">
                Блог
              </a>
            </li>
          </ul>
        </nav>
        <button className="header__button button hidden-mobile" type="button">
          Связаться с нами
        </button>

        <button
          className="header__burger-button burger-button visible-mobile"
          type="button"
          onclick="mobileOverlay.showModal()">
          <span className="visually-hidden">Открыть меню навигации</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
