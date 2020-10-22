import React from 'react';
// Components:
import Banner from '../Components/Banner';
import About from '../Components/About';
import APOD from '../Components/APOD';
import Earth from '../Components/Earth';

const Homepage = () => {
  return (
    <React.Fragment>
      <Banner></Banner>
      <About></About>
      <Earth></Earth>
      <div className='section-division'></div>
      <APOD></APOD>
    </React.Fragment>
  );
};

export default Homepage;
