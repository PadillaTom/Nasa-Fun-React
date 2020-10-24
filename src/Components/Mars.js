import React from 'react';
import MarsPhotos from './MarsPhotos';

const Mars = () => {
  return (
    <section className='section mars-sect'>
      <div className='section-title'>
        <h2>Mars</h2>
      </div>
      <div className='section-subtitle'>The Mythical Red Planet.</div>
      <div className='section-center'>
        <MarsPhotos></MarsPhotos>
      </div>
    </section>
  );
};

export default Mars;
