import React from 'react';

const Footer = () => {
  return (
    <section className='section footer-sect'>
      <div className='footer-container'>
        <div className='footer-text'>
          <p>
            Website by
            <a href='http://padillatomas.com/' className='footer-cta'>
              Tomas Padilla
            </a>
          </p>
          <p className='footer-copy'>&copy;2020. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
