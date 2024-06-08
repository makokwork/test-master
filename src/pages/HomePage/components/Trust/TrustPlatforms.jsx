import { NavLink, useLocation } from 'react-router-dom';
function TrustPlatforms() {
  const location = useLocation();
  let trustClass = 'trust__platform trust-givehelp';

  if (location.pathname === '/') {
    trustClass = 'trust__platform';
  }

  return (
    <div className={trustClass}>
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
