import CharitySlider from './CharitySlider';
function Charity() {
  return (
    <section className="section container">
      <header className="section__header">
        <h2 className="section__title" id="fourth-section">
          Больше чем благотворительность
        </h2>
        <div className="section__description">
          <p>
            Мы сформировали собственное видение о помощи людям и гордимся нашей деятельностью
            <br />
            <br />
            Стремление к новым вершинам - наш ключ к успеху
          </p>
        </div>
      </header>
      <CharitySlider />
    </section>
  );
}

export default Charity;
