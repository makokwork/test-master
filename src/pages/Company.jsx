import React from 'react';
import Hero from '../components/Hero';

{
  /* <div class="hero">
            <div class="hero__main">
              <div class="hero__body">
                <h1 class="hero__title main-page">Центр Единство</h1>
                <div class="hero__description">
                  <h2>Опора России</h2>
                </div>
                <div class="hero__text">
                  <p>
                    Мы поддерживаем патриотические ценности, национальную культуру и традиции,
                    важные для формирования единства нашей страны
                  </p>
                </div>
                <button class="hero__button button" onclick="desktopOverlay.showModal()">
                  Свяжитесь с нами
                </button>
              </div>
            </div>
          </div> */
}
function Company() {
  return (
    <main class="content">
      <Hero />

      <section class="section container">
        <div class="section__body">
          <div class="hero-navigation">
            <div class="hero-navigation__main">
              <div class="hero-navigation__body">
                <nav class="hero-navigation__navigation">
                  <ul class="hero-navigation__navigation-list">
                    <li class="hero-navigation__navigation-item">
                      <a href="#first-section" class="hero-navigation__navigation-link">
                        В центре событий
                      </a>
                    </li>

                    <li class="hero-navigation__navigation-item">
                      <a href="#second-section" class="hero-navigation__navigation-link">
                        Профессионалы своего дела
                      </a>
                    </li>

                    <li class="hero-navigation__navigation-item">
                      <a href="#third-section" class="hero-navigation__navigation-link">
                        О нас в цифрах
                      </a>
                    </li>

                    <li class="hero-navigation__navigation-item">
                      <a href="#fourth-section" class="hero-navigation__navigation-link">
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

      <section class="section container">
        <div class="videoholder">
          <div class="videoholder__body">
            <div class="videoholer__title">
              <h2 id="first-section">Мы всегда в центре событий, не смотря ни на что!</h2>
            </div>
            <div class="videoholder__wrapper">
              <video width="900" src="./videos/55.mov" controls></video>
            </div>
            <div class="videoholder__description">
              <p>Познакомьтесь с нами поближе</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2 class="section__title" id="second-section">
            Огромный опыт общественной деятельности
          </h2>
          <div class="section__description">
            <p>8 лет мы принимаем активное участие в социальных и общественных процессах</p>
          </div>
        </header>
        <div class="section__body">
          <div class="cards">
            <ul class="cards__list grid grid--3">
              <li class="cards__item">
                <article class="cards-card">
                  <div class="cards-card__body">
                    <h3 class="cards-card__title">Помощь людям</h3>

                    <img
                      src="./images/icons/1.svg"
                      alt=""
                      class="cards-card__image"
                      loading="lazy"
                    />
                  </div>
                </article>
              </li>

              <li class="cards__item">
                <article class="cards-card">
                  <div class="cards-card__body">
                    <h3 class="cards-card__title">Гуманитарные сборы</h3>

                    <img
                      src="./images/icons/2.svg"
                      alt=""
                      class="cards-card__image"
                      loading="lazy"
                    />
                  </div>
                </article>
              </li>

              <li class="cards__item">
                <article class="cards-card">
                  <div class="cards-card__body">
                    <h3 class="cards-card__title">Единство народа</h3>

                    <img
                      src="./images/icons/3.svg"
                      alt=""
                      class="cards-card__image"
                      loading="lazy"
                    />
                  </div>
                </article>
              </li>

              <li class="cards__item">
                <article class="cards-card">
                  <div class="cards-card__body">
                    <h3 class="cards-card__title">Сборы нуждающимся в медпомощи</h3>

                    <img
                      src="./images/icons/4.svg"
                      alt=""
                      class="cards-card__image"
                      loading="lazy"
                    />
                  </div>
                </article>
              </li>

              <li class="cards__item">
                <article class="cards-card">
                  <div class="cards-card__body">
                    <h3 class="cards-card__title">Мир и добро</h3>

                    <img
                      src="./images/icons/5.svg"
                      alt=""
                      class="cards-card__image"
                      loading="lazy"
                    />
                  </div>
                </article>
              </li>

              <li class="cards__item">
                <article class="cards-card">
                  <div class="cards-card__body">
                    <h3 class="cards-card__title">Финансовая помощь</h3>

                    <img
                      src="./images/icons/6.svg"
                      alt=""
                      class="cards-card__image"
                      loading="lazy"
                    />
                  </div>
                </article>
              </li>

              <li class="cards__item">
                <article class="cards-card">
                  <div class="cards-card__body">
                    <h3 class="cards-card__title">Патриотические программы</h3>
                    <img
                      src="./images/icons/7.svg"
                      alt=""
                      class="cards-card__image"
                      loading="lazy"
                    />
                  </div>
                </article>
              </li>

              <li class="cards__item">
                <article class="cards-card">
                  <div class="cards-card__body">
                    <h3 class="cards-card__title">Освещение проблем</h3>

                    <img
                      src="./images/icons/8.svg"
                      alt=""
                      class="cards-card__image"
                      loading="lazy"
                    />
                  </div>
                </article>
              </li>

              <li class="cards__item">
                <article class="cards-card">
                  <div class="cards-card__body">
                    <h3 class="cards-card__title">Воспитание</h3>

                    <img
                      src="./images/icons/9.svg"
                      alt=""
                      class="cards-card__image"
                      loading="lazy"
                    />
                  </div>
                </article>
              </li>
            </ul>
            <div class="score">
              <h2 class="score__title" id="third-section">
                Цифры говорят сами за себя - это наши ценности...
              </h2>
              <ul class="score__list grid grid--4">
                <li class="score__item">
                  <article class="score-card score-bg-1">
                    <div class="score-card__body">
                      <h3 class="score-card__title">8+</h3>
                      <p>лет мы помогаем людям, кто действительно попал в беду</p>
                    </div>
                  </article>
                </li>

                <li class="score__item">
                  <article class="score-card score-bg-2">
                    <div class="score-card__body">
                      <h3 class="score-card__title">100+</h3>
                      <p>успешных благотворительных акций</p>
                    </div>
                  </article>
                </li>

                <li class="score__item">
                  <article class="score-card score-bg-3">
                    <div class="score-card__body">
                      <h3 class="score-card__title">100%</h3>
                      <p>людей, что обратились к нам получили нужную помощь</p>
                    </div>
                  </article>
                </li>

                <li class="score__item">
                  <article class="score-card score-bg-4">
                    <div class="score-card__body">
                      <h3 class="score-card__title">200 000</h3>
                      <p>человек уже поддержали наш фонд</p>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2 class="section__title" id="fourth-section">
            Больше чем благотворительность
          </h2>
          <div class="section__description">
            <p>
              Мы сформировали собственное видение о помощи людям и гордимся нашей деятельностью{' '}
              <br />
              <br />
              Стремление к новым вершинам - наш ключ к успеху
            </p>
          </div>
        </header>
        <div class="charity-photos">
          <div class="charity-photos__body">
            <div class="charity-photos__inner">
              <figure>
                <img
                  src="./images/section-charity-1.jpg"
                  width="350"
                  height="500"
                  alt="Люди"
                  loading="lazy"
                />
                <figcaption>Открытие благотворительной ярмарки в городе Город</figcaption>
              </figure>

              <figure>
                <img
                  src="./images/section-charity-2.jpg"
                  width="350"
                  height="500"
                  alt="Люди"
                  loading="lazy"
                />
                <figcaption>Сбор гуманитарной помощи</figcaption>
              </figure>

              <figure>
                <img
                  src="./images/section-charity-3.jpg"
                  width="350"
                  height="500"
                  alt="Люди"
                  loading="lazy"
                />
                <figcaption>Выступление на важных общественных мероприятиях</figcaption>
              </figure>
            </div>

            <div class="charity-photos__partners">
              <div class="partners__body">
                <div class="partners__title">
                  <h2>Наши партнеры</h2>
                </div>
                <div class="partners__images">
                  <img
                    src="./images/partners-image-1.png"
                    alt=""
                    width="155"
                    height="155"
                    loading="lazy"
                  />

                  <img
                    src="./images/partners-image-2.png"
                    alt=""
                    width="155"
                    height="155"
                    loading="lazy"
                  />

                  <img
                    src="./images/partners-image-1.png"
                    alt=""
                    width="155"
                    height="155"
                    loading="lazy"
                  />

                  <img
                    src="./images/partners-image-2.png"
                    alt=""
                    width="155"
                    height="155"
                    loading="lazy"
                  />

                  <img
                    src="./images/partners-image-1.png"
                    alt=""
                    width="155"
                    height="155"
                    loading="lazy"
                  />

                  <img
                    src="./images/partners-image-2.png"
                    alt=""
                    width="155"
                    height="155"
                    loading="lazy"
                  />

                  <img
                    src="./images/partners-image-1.png"
                    alt=""
                    width="155"
                    height="155"
                    loading="lazy"
                  />

                  <img
                    src="./images/partners-image-2.png"
                    alt=""
                    width="155"
                    height="155"
                    loading="lazy"
                  />

                  <img
                    src="./images/partners-image-1.png"
                    alt=""
                    width="155"
                    height="155"
                    loading="lazy"
                  />

                  <img
                    src="./images/partners-image-2.png"
                    alt=""
                    width="155"
                    height="155"
                    loading="lazy"
                  />

                  <img
                    src="./images/partners-image-1.png"
                    alt=""
                    width="155"
                    height="155"
                    loading="lazy"
                  />

                  <img
                    src="./images/partners-image-2.png"
                    alt=""
                    width="155"
                    height="155"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section container">
        <div class="trust">
          <div class="trust__title">
            <h2>Нам доверяют</h2>
          </div>
          <div class="trust__body">
            <div class="trust__inner">
              <img src="./images/diplom.png" alt="Благодарственное письмо" loading="lazy" />
              <img src="./images/diplom.png" alt="Благодарственное письмо" loading="lazy" />
              <img src="./images/diplom.png" alt="Благодарственное письмо" loading="lazy" />
              <img src="./images/diplom.png" alt="Благодарственное письмо" loading="lazy" />
              <img src="./images/diplom.png" alt="Благодарственное письмо" loading="lazy" />
              <img src="./images/diplom.png" alt="Благодарственное письмо" loading="lazy" />
            </div>
          </div>
          <div class="trust__platform">
            <div class="platform__title">
              <h2>Мы на краудфандинговых платформах</h2>
            </div>
            <div class="platform__list">
              <a href="/">
                <img src="./images/icons/kr-1.svg" alt="" loading="lazy" />
              </a>
              <a href="/">
                <img src="./images/icons/kr-2.svg" alt="" loading="lazy" />
              </a>
              <a href="/">
                <img src="./images/icons/kr-3.svg" alt="" loading="lazy" />
              </a>
              <a href="/">
                <img src="./images/icons/kr-4.svg" alt="" loading="lazy" />
              </a>
              <a href="/">
                <img src="./images/icons/kr-5.svg" alt="" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2 class="section__title">Документы</h2>
          <h3 class="visually-hidden">Скачивание документов</h3>
        </header>
        <div class="section__body">
          <div class="documents">
            <ul class="documents__list">
              <li class="documents__item">
                <details class="documents__accordion">
                  <summary class="documents__accordion-header">
                    <h4 class="documents__accordion-title">Учредительные документы</h4>
                    <span class="documents__accordion-indicator"></span>
                  </summary>
                  <div class="documents__accordion-body">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      alt="Загрузочная ссылка">
                      <path
                        d="M20.8253 22.2871H20.8394M21.3885 17.5996H22.2334C23.5455 17.5996 24.2015 17.5996 24.7191 17.8374C25.4091 18.1546 25.9574 18.763 26.2432 19.5287C26.4575 20.103 26.4575 20.831 26.4575 22.2871C26.4575 23.7432 26.4575 24.4712 26.2432 25.0455C25.9574 25.8112 25.4091 26.4196 24.7191 26.7368C24.2015 26.9746 23.5455 26.9746 22.2334 26.9746H5.33691C4.02479 26.9746 3.36872 26.9746 2.8512 26.7368C2.16119 26.4196 1.61297 25.8112 1.32715 25.0455C1.11279 24.4712 1.11279 23.7432 1.11279 22.2871C1.11279 20.831 1.11279 20.103 1.32715 19.5287C1.61297 18.763 2.16119 18.1546 2.8512 17.8374C3.36872 17.5996 4.02479 17.5996 5.33691 17.5996H6.18173M13.7851 19.1621V1.97461M13.7851 19.1621L9.56102 14.4746M13.7851 19.1621L18.0093 14.4746"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>Публичная оферта о заключении договора на оказание услуг № 1</p>
                  </div>
                </details>
              </li>

              <li class="documents__item">
                <details class="documents__accordion">
                  <summary class="documents__accordion-header">
                    <h4 class="documents__accordion-title">Банковские документы</h4>
                    <span class="documents__accordion-indicator"></span>
                  </summary>
                  <div class="documents__accordion-body">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      alt="Загрузочная ссылка">
                      <path
                        d="M20.8253 22.2871H20.8394M21.3885 17.5996H22.2334C23.5455 17.5996 24.2015 17.5996 24.7191 17.8374C25.4091 18.1546 25.9574 18.763 26.2432 19.5287C26.4575 20.103 26.4575 20.831 26.4575 22.2871C26.4575 23.7432 26.4575 24.4712 26.2432 25.0455C25.9574 25.8112 25.4091 26.4196 24.7191 26.7368C24.2015 26.9746 23.5455 26.9746 22.2334 26.9746H5.33691C4.02479 26.9746 3.36872 26.9746 2.8512 26.7368C2.16119 26.4196 1.61297 25.8112 1.32715 25.0455C1.11279 24.4712 1.11279 23.7432 1.11279 22.2871C1.11279 20.831 1.11279 20.103 1.32715 19.5287C1.61297 18.763 2.16119 18.1546 2.8512 17.8374C3.36872 17.5996 4.02479 17.5996 5.33691 17.5996H6.18173M13.7851 19.1621V1.97461M13.7851 19.1621L9.56102 14.4746M13.7851 19.1621L18.0093 14.4746"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>Публичная оферта о заключении договора на оказание услуг № 1</p>
                  </div>
                </details>
              </li>

              <li class="documents__item">
                <details class="documents__accordion">
                  <summary class="documents__accordion-header">
                    <h4 class="documents__accordion-title">Публичные оферты </h4>
                    <span class="documents__accordion-indicator"></span>
                  </summary>
                  <div class="documents__accordion-body">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      alt="Загрузочная ссылка">
                      <path
                        d="M20.8253 22.2871H20.8394M21.3885 17.5996H22.2334C23.5455 17.5996 24.2015 17.5996 24.7191 17.8374C25.4091 18.1546 25.9574 18.763 26.2432 19.5287C26.4575 20.103 26.4575 20.831 26.4575 22.2871C26.4575 23.7432 26.4575 24.4712 26.2432 25.0455C25.9574 25.8112 25.4091 26.4196 24.7191 26.7368C24.2015 26.9746 23.5455 26.9746 22.2334 26.9746H5.33691C4.02479 26.9746 3.36872 26.9746 2.8512 26.7368C2.16119 26.4196 1.61297 25.8112 1.32715 25.0455C1.11279 24.4712 1.11279 23.7432 1.11279 22.2871C1.11279 20.831 1.11279 20.103 1.32715 19.5287C1.61297 18.763 2.16119 18.1546 2.8512 17.8374C3.36872 17.5996 4.02479 17.5996 5.33691 17.5996H6.18173M13.7851 19.1621V1.97461M13.7851 19.1621L9.56102 14.4746M13.7851 19.1621L18.0093 14.4746"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>Публичная оферта о заключении договора на оказание услуг № 1</p>
                  </div>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section container">
        <div class="section__body">
          <div class="banner-partnership">
            <h2 class="banner-partnership__title">Делаем добро вместе</h2>
            <h3 class="banner-partnership__description">
              Есть желание помогать другим людям? Свяжитесь с нами!
            </h3>
            <button class="banner-partnership__button button" onclick="desktopOverlay.showModal()">
              Связаться с нами
            </button>
          </div>
        </div>
      </section>
    </main>

    /* // <section className="section-report container-about">
    //   <div className="section__body">
    //     <div className="hero-report">
    //       <div className="hero-report__main">
    //         <div className="hero-report__body">
    //           <h1 className="hero-report__title">Проекты</h1>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section> */
  );
}

export default Company;
