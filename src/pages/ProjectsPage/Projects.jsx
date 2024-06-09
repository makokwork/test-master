import React, { Suspense } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import useHeroLoaded from '../../hooks/useHeroLoaded';

const Project = React.lazy(() => import('./components/Project'));

function Projects() {
  const [isHeroLoaded, handleHeroLoad] = useHeroLoaded();
  return (
    <>
      <Header />
      <Hero onLoad={handleHeroLoad} />
      {isHeroLoaded && (
        <Suspense>
          <section className="section container-about">
            <div className="project-container">
              <Project />
              <Project />
              <Project />
              <Project />
            </div>
          </section>
          <Footer />
        </Suspense>
      )}
    </>
  );
}

export default Projects;
