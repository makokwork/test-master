import { NavLink } from 'react-router-dom';
function Project() {
  return (
    <div className="project-container-item">
      <div className="project-container-wrapper">
        <div className="project-container-image">
          <img src="/images/people_about.png" alt="" />
        </div>
        <div className="project-container-title">
          <h3>Сладкие печеньки сделали немыслимое открытие в области кошачей космонавтики</h3>
        </div>
        <div className="project-container-description">
          Сладкие печеньки сделали немыслимое открытие в области кошачей космонавтики Сладкие
          печеньки сделали немыслимое открытие в области кошачей космонавтики
        </div>
        <div className="project-container-button">
          <NavLink to="/" className="project-button">
            Узнать больше
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Project;
