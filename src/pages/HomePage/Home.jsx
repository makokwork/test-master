import React, { Suspense } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import useHeroLoaded from '../../hooks/useHeroLoaded';

const HeroNav = React.lazy(() => import('./components/HeroNav/HeroNav'));
const Videoholder = React.lazy(() => import('./components/Videoholder/Videoholder'));
const SocialActivity = React.lazy(() => import('./components/SocialActivity/SocialActivity'));
const Slider = React.lazy(() => import('../../components/CharitySlider/Swiper/Swiper'));
const Partners = React.lazy(() => import('../../components/CharitySlider/Partners'));
const Trust = React.lazy(() => import('./components/Trust/Trust'));
const Documents = React.lazy(() => import('./components/Documents/Documents'));
const Banner = React.lazy(() => import('./components/Banner/Banner'));

function Company() {
  const [isHeroLoaded, handleHeroLoad] = useHeroLoaded();
  return (
    <main className="content">
      <Header />
      <Hero onLoad={handleHeroLoad} />
      {isHeroLoaded && (
        <Suspense>
          <HeroNav />
          <Videoholder />
          <SocialActivity />
          <Slider />
          <Partners />
          <Trust />
          <Documents />
          <Banner />
          <Footer />
        </Suspense>
      )}
    </main>
  );
}

export default Company;
