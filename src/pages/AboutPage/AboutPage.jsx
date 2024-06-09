import React, { Suspense } from 'react';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

// Ленивая загрузка остальных компонентов
const About = React.lazy(() => import('./components/About/About'));
const Teamwork = React.lazy(() => import('./components/Teamwork/Teamwork'));
const Family = React.lazy(() => import('./components/Teamwork/Family'));
const Slider = React.lazy(() => import('../../components/CharitySlider/Swiper/Swiper'));

function AboutUs() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense>
        <About />
        <Teamwork />
        <Slider />
        <Family />
      </Suspense>
      <Footer />
    </>
  );
}

export default AboutUs;
