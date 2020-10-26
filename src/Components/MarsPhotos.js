import React, { useState, useEffect } from 'react';
import Loading from './Loading';
// API KEY:
const apiKey = process.env.REACT_APP_API_KEY;

const MarsPhotos = ({ nameForApi, solDay }) => {
  // Set Photos
  const [frontPhotos, setFrontPhotos] = useState(null);
  const [rearPhotos, setRearPhotos] = useState(null);

  // Front Camera = FHAZ
  useEffect(() => {
    fetchFrontPhotos();
    async function fetchFrontPhotos() {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${nameForApi}/photos?sol=${solDay}&camera=fhaz&api_key=${apiKey}`
      );
      const data = await response.json();
      setFrontPhotos(data.photos[0]);
    }
  }, [nameForApi, solDay]);

  // Rear Camera =
  useEffect(() => {
    fetchRearPhotos();
    async function fetchRearPhotos() {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${nameForApi}/photos?sol=${solDay}&camera=rhaz&api_key=${apiKey}`
      );
      const data = await response.json();
      setRearPhotos(data.photos[0]);
    }
  }, [nameForApi, solDay]);

  if (frontPhotos === null || rearPhotos === null) {
    return <Loading></Loading>;
  }
  return (
    <React.Fragment>
      <h2 className='current-display'>Displaying {nameForApi}'s Photos</h2>

      <article className='photos-container'>
        {/* Front Camera */}
        <div className='front-camera'>
          {frontPhotos?.img_src ? (
            <React.Fragment>
              <img
                src={frontPhotos?.img_src}
                alt='No Photo of Such SOL'
                className='camera-photo'
              />
              <p className='camera-name'>Front Hazard Avoidance Camera</p>
              <p className='earth-date'>{frontPhotos?.earth_date}</p>
            </React.Fragment>
          ) : (
            <h4 className='no-sol-photos'>
              There are no photos for such SOL, please try another one!{' '}
            </h4>
          )}
        </div>
        {/* Rear Camera */}
        <div className='rear-camera'>
          {rearPhotos?.img_src ? (
            <React.Fragment>
              {' '}
              <img
                src={rearPhotos?.img_src}
                alt='No Photo of Such SOL'
                className='camera-photo'
              />
              <p className='camera-name'> Rear Hazard Avoidance Camera</p>
              <p className='earth-date'>{rearPhotos?.earth_date}</p>
            </React.Fragment>
          ) : (
            <h2></h2>
          )}
        </div>
      </article>
    </React.Fragment>
  );
};

export default MarsPhotos;
