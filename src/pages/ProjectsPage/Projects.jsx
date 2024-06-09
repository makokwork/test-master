import React, { Suspense } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';

const Project = React.lazy(() => import('./components/Project'));

function Projects() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense>
        <section className="section container-about">
          <div className="project-container">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </section>
      </Suspense>
      <Footer />
    </>
  );
}

export default Projects;
