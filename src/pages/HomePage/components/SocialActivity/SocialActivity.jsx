import Cards from './Cards';
import Score from './Score';
function SocialActivity() {
  return (
    <section className="section container">
      <header className="section__header">
        <h2 className="section__title" id="second-section">
          Огромный опыт общественной деятельности
        </h2>
        <div className="section__description">
          <p>8 лет мы принимаем активное участие в социальных и общественных процессах</p>
        </div>
      </header>
      <div className="section__body">
        <div className="cards">
          <Cards />
          <Score />
        </div>
      </div>
    </section>
  );
}

export default SocialActivity;
