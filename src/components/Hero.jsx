import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Hero() {
  const location = useLocation();
  const [headerInfo, setHeaderInfo] = useState({
    img: '',
    text: ''
  });

  useEffect(() => {
    if (location.pathname === '/') setHeaderInfo({
      img: 'section-title',
      text: 'Центр Единство'
    });
    if (location.pathname === '/about') setHeaderInfo({
      img: 'header-about',
      text: 'Кто мы такие и чем занимаемся'
    });
    if (location.pathname === '/projects') setHeaderInfo({
      img: 'header-post',
      text: 'Проекты'
    });
    if (location.pathname === '/reports') setHeaderInfo({
      img: 'header-report',
      text: 'Отчеты'
    });
  }, [location])

  return (
    <section style={{
      background: `url('assets/${headerInfo.img}.png') center/cover no-repeat`
    }} className="section-report container-about">
      <div className="section__body">
        <div className="hero-report">
          <div className="hero-report__main">
            <div className="hero-report__body">
              <h1 className="hero-report__title">{headerInfo.text}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
