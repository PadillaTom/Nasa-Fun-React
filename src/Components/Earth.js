import React from 'react';

const Earth = () => {
  return (
    <section className='section earth-sect'>
      <div className='earth-info-container'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/nasa-fun.appspot.com/o/earth.png?alt=media&token=2820b08f-31f6-4d12-bfbb-7117b167bcbd'
          alt='earth-hand'
          className='earth-info-img'
        />
        <div className='earth-text'>
          <p className='earth-desc'>
            EARTH, OUR HOME planet, is a world unlike any other. The third
            planet from the sun, Earth is the only place in the known universe
            confirmed to host life.
          </p>
          <p className='earth-desc2'>
            With a radius of 3,959 miles, Earth is the fifth largest planet in
            our solar system, and it's the only one known for sure to have
            liquid water on its surface. Earth is also unique in terms of
            monikers. Every other solar system planet was named for a Greek or
            Roman deity, but for at least a thousand years, some cultures have
            described our world using the Germanic word “earth,” which means
            simply “the ground.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Earth;
