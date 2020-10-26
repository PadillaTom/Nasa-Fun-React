import React from 'react';
import RoversData from '../Assets/roversData';

const RoverSelection = () => {
  return (
    <React.Fragment>
      {RoversData.map((rover) => {
        const { id, img, name, desc } = rover;
        return (
          <article className='single-rover' key={id}>
            <img src={img} alt={name} className='rover-img' />
            <div className='rovers-info'>
              <h4 className='rover-name'>{name}</h4>
              <p className='rover-desc'>{desc}</p>
            </div>
          </article>
        );
      })}
    </React.Fragment>
  );
};

export default RoverSelection;
