function HeroNav() {
  return (
    <section className="section container">
      <div className="section__body">
        <div className="hero-navigation">
          <div className="hero-navigation__main">
            <div className="hero-navigation__body">
              <nav className="hero-navigation__navigation">
                <ul className="hero-navigation__navigation-list">
                  <li className="hero-navigation__navigation-item">
                    <a href="#first-section" className="hero-navigation__navigation-link">
                      В центре событий
                    </a>
                  </li>

                  <li className="hero-navigation__navigation-item">
                    <a href="#second-section" className="hero-navigation__navigation-link">
                      Профессионалы своего дела
                    </a>
                  </li>

                  <li className="hero-navigation__navigation-item">
                    <a href="#third-section" className="hero-navigation__navigation-link">
                      О нас в цифрах
                    </a>
                  </li>

                  <li className="hero-navigation__navigation-item">
                    <a href="#fourth-section" className="hero-navigation__navigation-link">
                      Немного о нас
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroNav;
