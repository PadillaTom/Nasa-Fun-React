import React from 'react';

import RoverSelection from './RoverSelection';

const Mars = () => {
  // Request by name:

  return (
    <section className='section mars-sect'>
      <div className='section-title'>
        <h2>Mars</h2>
      </div>
      <div className='section-subtitle'>The Mythical Red Planet.</div>
      <div className='section-center'>
        <h5 className='selection-text'>Select on of the following Rovers:</h5>
        <div className='rovers-container'>
          <RoverSelection></RoverSelection>
        </div>
      </div>
    </section>
  );
};

export default Mars;
