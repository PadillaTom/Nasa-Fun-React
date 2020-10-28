import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';

const Banner = () => {
  let nasaLogo = useRef(null);
  useEffect(() => {
    TweenMax.to(nasaLogo, 1.5, {
      transform: 'scale(1)',
      opacity: 1,
    });
  }, []);
  return (
    <section className='section banner-sect'>
      <div className='banner-info'>
        <h2 className='banner-text'>Welcome to a Fun place with</h2>
        <img
          ref={(el) => (nasaLogo = el)}
          src='https://firebasestorage.googleapis.com/v0/b/nasa-fun.appspot.com/o/NasaRed.svg?alt=media&token=47bd4320-6787-4cee-9910-5420f6cfbeff'
          alt='nasa-logo-text'
          className='banner-info-img'
        />
      </div>
    </section>
  );
};

export default Banner;
