import React from 'react';
import Navbar from './components/layout/navbar/index';
import Footer from './components/layout/footer/index';
import FrontCarousel from './components/carousell/index';
import Cards from './components/cards/index';
import AboutMe from './components/aboutme/index';
import Jobs from './components/jobs/index';


function App() {
  return (
    <>
      <Navbar />
      <FrontCarousel />
      <Cards />
      <AboutMe />
      <Jobs />
      <Footer />
    </>
  );
}

export default App;
