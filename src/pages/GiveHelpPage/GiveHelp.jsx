import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Finance from './components/Finance/Finance';
import HelpList from './components/HelpList/HelpList';
import Shop from './components/Shop/Shop';

function GiveHelp() {
  return (
    <>
      <Header />
      <Finance />
      <HelpList />
      <Shop />

      <Footer />
    </>
  );
}

export default GiveHelp;
