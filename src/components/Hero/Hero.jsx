import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactModalButton from '../ContactModalButton/ContactModalButton';

function Hero({ onLoad }) {
  const location = useLocation();
  const [headerInfo, setHeaderInfo] = React.useState({
    img: '',
    text: '',
  });

  useEffect(() => {
    if (location.pathname === '/') {
      setHeaderInfo({
        img: 'section-title',
        text: 'Центр Единство',
        subtitle: 'Опора России',
        description:
          'Мы поддерживаем патриотические ценности, национальную культуру и традиции, важные для формирования единства нашей страны',
        isHome: true,
      });
    } else if (location.pathname === '/about') {
      setHeaderInfo({
        img: 'header-about',
        text: 'Кто мы такие и чем занимаемся',
        isHome: false,
      });
    } else if (location.pathname === '/projects') {
      setHeaderInfo({
        img: 'header-post',
        text: 'Проекты',
        isHome: false,
      });
    } else if (location.pathname === '/reports') {
      setHeaderInfo({
        img: 'header-report',
        text: 'Отчеты',
        isHome: false,
      });
    }
  }, [location]);

  // Используем эффект, чтобы сигнализировать об окончании загрузки фона
  useEffect(() => {
    const img = new Image();
    img.src = `assets/${headerInfo.img}.png`;
    img.onload = onLoad;
  }, [headerInfo.img, onLoad]);

  return (
    <section
      style={{
        background: `url('assets/${headerInfo.img}.png') center/cover no-repeat`,
      }}
      className="section-upper container">
      <div className="section__body">
        <div className="hero-report">
          <div className="hero-report__main">
            <div className="hero-report__body">
              <h1
                style={{ fontFamily: headerInfo.isHome ? 'Balkara' : 'Inter' }}
                className="hero-report__title">
                {headerInfo.text}
              </h1>
              <h2>{headerInfo.subtitle}</h2>
              <p>{headerInfo.description}</p>
              {location.pathname === '/' && (
                <ContactModalButton className={'hero__button button'}>
                  Свяжитесь с нами
                </ContactModalButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
