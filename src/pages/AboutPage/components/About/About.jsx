function About() {
  return (
    <section className="section container-about">
      <div className="section__body">
        <div className="start__body">
          <div className="start__description">
            <div className="start__title">
              <h2>Кто мы такие?</h2>
            </div>
            <p>
              Мы - команда, объединенная общей целью делать мир лучше. Наша организация стремится к
              тому, чтобы каждый человек имел равные возможности для развития, получения образования
              и поддержки.
            </p>

            <p>
              Мы занимаемся реализацией различных проектов и программ, направленных на социальное
              благополучие, помощь нуждающимся
            </p>
          </div>
          <div className="start__image">
            <img src="../images/people_about.png" alt="Люди на фоне флага" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
