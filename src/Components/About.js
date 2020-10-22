import React from 'react';

const About = () => {
  return (
    <section className='section about-sect'>
      <div className='section-title'>
        <h2>About</h2>
      </div>
      <div className='section-center'>
        <div className='about-info'>
          Hello!
          <br />
          Welcome to this personal guided tour of the cosmos.
          <br />
          Here you will find some fun projects with the
          <span>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/nasa-fun.appspot.com/o/NasaRed.svg?alt=media&token=47bd4320-6787-4cee-9910-5420f6cfbeff'
              alt=''
              className='about-span-logo'
            />
          </span>
          API.
          <br />
          Let's explore the wonders of Planet Earth and it's neighbours.
          <div className='about-quote-container'>
            <h4 className='about-quote'>
              "Mathematics is the language in which God has written the
              universe."
            </h4>
            <p className='quote-signature'>Galileo Galilei</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
