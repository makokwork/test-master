import { NavLink } from 'react-router-dom';
function TrustPlatforms() {
  return (
    <div className="trust__platform">
      <div className="platform__title">
        <h2>Мы на краудфандинговых платформах</h2>
      </div>
      <div className="platform__list">
        <NavLink to="/">
          <img src="./images/icons/kr-1.svg" alt="" loading="lazy" />
        </NavLink>
        <NavLink to="/">
          <img src="./images/icons/kr-2.svg" alt="" loading="lazy" />
        </NavLink>
        <NavLink to="/">
          <img src="./images/icons/kr-3.svg" alt="" loading="lazy" />
        </NavLink>
        <NavLink to="/">
          <img src="./images/icons/kr-4.svg" alt="" loading="lazy" />
        </NavLink>
        <NavLink to="/">
          <img src="./images/icons/kr-5.svg" alt="" loading="lazy" />
        </NavLink>
      </div>
    </div>
  );
}

export default TrustPlatforms;
