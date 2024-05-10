function Videoholder() {
  return (
    <section className="section container">
      <div className="videoholder">
        <div className="videoholder__body">
          <div className="videoholer__title">
            <h2 id="first-section">Мы всегда в центре событий, не смотря ни на что!</h2>
          </div>
          <div className="videoholder__wrapper">
            <video width="900" src="./videos/55.mov" controls></video>
          </div>
          <div className="videoholder__description">
            <p>Познакомьтесь с нами поближе</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Videoholder;
