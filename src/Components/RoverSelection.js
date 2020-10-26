import React from 'react';
import MarsPhotos from './MarsPhotos';
import RoversData from '../Assets/roversData';

const RoverSelection = ({ solDay }) => {
  const [nameForApi, setNameForApi] = React.useState('');

  return (
    <React.Fragment>
      <div className='rovers-container'>
        {RoversData.map((rover) => {
          const { id, img, name, desc } = rover;
          return (
            <article
              className='single-rover'
              key={id}
              onClick={() => {
                setNameForApi(name);
              }}
            >
              <img src={img} alt={name} className='rover-img' />
              <div className='rovers-info'>
                <h4 className='rover-name'>{name}</h4>
                <p className='rover-desc'>{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
      {nameForApi && (
        <MarsPhotos nameForApi={nameForApi} solDay={solDay}></MarsPhotos>
      )}
    </React.Fragment>
  );
};

export default RoverSelection;
