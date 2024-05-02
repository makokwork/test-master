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
              <Link href="/" className="header__menu-link current-page">
                Компания
              </Link>
            </li>

            <li className="header__menu-item">
              <Link href="/AboutUs" className="header__menu-link">
                О нас
              </Link>
            </li>

            <li className="header__menu-item">
              <Link to="/projects" className="header__menu-link">
                Проекты
              </Link>
            </li>

            <li className="header__menu-item">
              <Link to="/reports" className="header__menu-link">
                Отчеты
              </Link>
            </li>

            <li className="header__menu-item">
              <Link to="/" className="header__menu-link">
                Документы
              </Link>
            </li>

            <li className="header__menu-item">
              <Link to="/" className="header__menu-link">
                Получить помощь
              </Link>
            </li>

            <li className="header__menu-item">
              <Link to="/" className="header__menu-link">
                Помочь другим
              </Link>
            </li>

            <li className="header__menu-item">
              <Link to="/" className="header__menu-link">
                Блог
              </Link>
            </li>
          </ul>
        </nav>
        <button className="header__button button hidden-mobile" type="button">
          Связаться с нами
        </button>

        <button
          className="header__burger-button burger-button visible-mobile"
          type="button"
          // onclick="mobileOverlay.showModal()" Нужен onClick(function)
        >
          <span className="visually-hidden">Открыть меню навигации</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
