function Banner() {
  return (
    <section className="section container">
      <div className="section__body">
        <div className="banner-partnership">
          <h2 className="banner-partnership__title">Делаем добро вместе</h2>
          <h3 className="banner-partnership__description">
            Есть желание помогать другим людям? Свяжитесь с нами!
          </h3>
          <button
            className="banner-partnership__button button"
            onclick="desktopOverlay.showModal()">
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
