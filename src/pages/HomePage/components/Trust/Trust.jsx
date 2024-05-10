import TrustPlatforms from './TrustPlatforms';
function Trust() {
  return (
    <section className="section container">
      <div className="trust">
        <div className="trust__title">
          <h2>Нам доверяют</h2>
        </div>
        <div className="trust__body">
          <div className="trust__inner">
            <img src="./images/diplom.png" alt="Благодарственное письмо" loading="lazy" />
            <img src="./images/diplom.png" alt="Благодарственное письмо" loading="lazy" />
            <img src="./images/diplom.png" alt="Благодарственное письмо" loading="lazy" />
            <img src="./images/diplom.png" alt="Благодарственное письмо" loading="lazy" />
            <img src="./images/diplom.png" alt="Благодарственное письмо" loading="lazy" />
            <img src="./images/diplom.png" alt="Благодарственное письмо" loading="lazy" />
          </div>
          <TrustPlatforms />
        </div>
      </div>
    </section>
  );
}

export default Trust;
