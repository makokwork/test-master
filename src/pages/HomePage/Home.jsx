import React from 'react';

import HeroNav from './components/HeroNav/HeroNav';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Videoholder from './components/Videoholder/Videoholder';
import SocialActivity from './components/SocialActivity/SocialActivity';
import Trust from './components/Trust/Trust';
import Charity from '../../components/CharitySlider/Charity';
import Documents from './components/Documents/Documents';
import Banner from './components/Banner/Banner';
import Hero from '../../components/Hero/Hero';

function Company() {
  return (
    <main class="content">
      <Header />
      <Hero />
      <HeroNav />
      <Videoholder />
      <SocialActivity />
      <Charity />

      <Trust />
      <Documents />
      <Banner />
      <Footer />
    </main>
  );
}

export default Company;
