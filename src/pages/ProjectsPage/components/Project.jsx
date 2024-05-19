function Project() {
  return (
    <div className="project__container-item">
      <div className="image">
        <img src="../../../assets/partnership.png" alt="" />
      </div>

      <div className="title">
        <h3>Помощь детям Донбасса</h3>
      </div>
      <div className="description">
        <p>
          Это текст, что будет написан редактором, повествующий нам о проекте по ребёнку, что попал
          в беду. Именно этот текст - пример того, как будет выглядеть много текста.
        </p>
      </div>
      <button className="button">Узнать больше</button>
    </div>
  );
}
export default Project;
