import React from 'react';
// Components:
import Banner from '../Components/Banner';
import About from '../Components/About';
import APOD from '../Components/APOD';

const Homepage = () => {
  return (
    <React.Fragment>
      <Banner></Banner>
      <About></About>
      <div className='section-division'></div>
      <APOD></APOD>
    </React.Fragment>
  );
};

export default Homepage;
