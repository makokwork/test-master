import { NavLink } from 'react-router-dom';
function Blog() {
  return (
    <div className="blog-container-item">
      <div className="container-wrapper">
        <div className="container-image">
          <img src="/images/people_about.png" alt="" />
        </div>
        <div className="container-title">
          <h3>Сладкие печеньки сделали немыслимое открытие в области кошачей космонавтики</h3>
        </div>
        <div className="container-description">
          Сладкие печеньки сделали немыслимое открытие в области кошачей космонавтики Сладкие
          печеньки сделали немыслимое открытие в области кошачей космонавтики
        </div>
        <div className="container-bottom">
          <NavLink to="/">Читать полностью</NavLink>
          <p className="container-data">2 сентября</p>
        </div>
      </div>
    </div>
  );
}
export default Blog;
