import React from 'react';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import About from './components/About/About';
import Teamwork from './components/Teamwork/Teamwork';
import Family from './components/Teamwork/Family';
import Slider from '../../components/CharitySlider/Swiper/Swiper';

function AboutUs() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Teamwork />
      <Slider />
      <Family />
      <Footer />
    </>
  );
}

export default AboutUs;
