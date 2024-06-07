import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Project from './components/Project';

function Projects() {
  return (
    <>
      <Header />
      <Hero />
      <section className="section container-about">
        <div className="project-container">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Projects;
