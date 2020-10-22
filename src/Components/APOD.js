import React, { useState, useEffect } from 'react';
import Loading from './Loading';
// API KEY:
const apiKey = process.env.REACT_APP_API_KEY;

const APOD = () => {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    fetchApod();
    async function fetchApod() {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await response.json();
      setApod(data);
    }
  }, []);
  if (apod === null) {
    return <Loading></Loading>;
  }
  //   Destrcture APOD Data:
  const { date, explanation, media_type, title, url } = apod;

  // Main:
  return (
    <React.Fragment>
      <section className='section apod-sect'>
        <div className='section-title'>
          <h2>A.P.O.D.</h2>
        </div>
        <div className='section-subtitle'>
          <h5>Astronomy Picture Of the Day</h5>
        </div>
        <div className='apod-container'>
          {media_type === 'image' ? (
            <div className='apod-img-container'>
              <img src={url} alt={title} className='apod-img ' />
            </div>
          ) : (
            <iframe
              title='video'
              src={url}
              gesture='media'
              allow='encrypted-media'
              allowFullScreen='false'
              className='apod-img'
            ></iframe>
          )}

          <div className='apod-info'>
            <p className='apod-date'>{date}</p>
            <h3 className='apod-title'>{title}</h3>
            <p className='apod-explanation'>{explanation}</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default APOD;
