import React, { useState, useEffect } from 'react';
import Loading from './Loading';
// API KEY:
const apiKey = process.env.REACT_APP_API_KEY;

const MarsPhotos = ({ nameForApi, solDay }) => {
  // Set Photos
  const [frontPhotos, setFrontPhotos] = useState();
  console.log(solDay);
  console.log(frontPhotos);

  useEffect(() => {
    fetchPhotos();
    async function fetchPhotos() {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${nameForApi}/photos?sol=${solDay}&camera=fhaz&api_key=${apiKey}`
      );
      const data = await response.json();
      setFrontPhotos(data.photos[0]);
    }
  }, []);

  if (frontPhotos === undefined) {
    return <Loading></Loading>;
  }

  return <section className='section marsphoto-sect'></section>;
};

export default MarsPhotos;
