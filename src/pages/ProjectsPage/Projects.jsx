import React, { Suspense } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import useHeroLoaded from '../../hooks/useHeroLoaded';
import { Posts } from '../../components/Posts';

function Projects() {
  const [isHeroLoaded, handleHeroLoad] = useHeroLoaded();
  return (
    <>
      <Header />
      <Hero onLoad={handleHeroLoad} />
      {isHeroLoaded && (
        <Suspense>
          <section className="section container-about">
            <Posts category={'projects'} />
          </section>
          <Footer />
        </Suspense>
      )}
    </>
  );
}

export default Projects;
