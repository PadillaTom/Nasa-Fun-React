import React from 'react';

import RoverSelection from './RoverSelection';

const Mars = () => {
  const [solDay, setSolDay] = React.useState('');

  return (
    <section className='section mars-sect'>
      <div className='section-title'>
        <h2>Mars</h2>
      </div>
      <div className='section-subtitle'>The Mythical Red Planet.</div>
      <div className='section-center'>
        <div className='photo-explanation'>
          <h4>
            Photos are organized by the sol (Martian rotation or day) on which
            they were taken, counting up from the rover's landing date.
          </h4>
          <form className='sol-selection'>
            <label htmlFor='sol' className='sol-label'>
              Choose a SOL:
            </label>
            <input
              type='text'
              placeholder='(1 to Date)'
              name='sol'
              className='sol-input'
              onChange={(e) => {
                e.preventDefault();
                setSolDay(e.target.value);
              }}
            />
          </form>
        </div>
        <h5 className='selection-text'>Select on of the following Rovers:</h5>
        <RoverSelection solDay={solDay}></RoverSelection>
      </div>
    </section>
  );
};

export default Mars;
