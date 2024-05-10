import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GetHelpList from './components/GetHelpList';
import Contact from '../../components/Contact/Contact';
function GetHelp() {
  return (
    <div>
      <Header />
      <GetHelpList />
      <Contact />
      <Footer />
    </div>
  );
}

export default GetHelp;
