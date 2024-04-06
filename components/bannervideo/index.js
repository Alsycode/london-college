import React from 'react';
import backgroundImage from '../../public/images/banner/one.jpg'; // Import your background image

const Main = () => {
  return (
    <div
      className="background-container"
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(/images/banner/one.jpg)`, // Set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
    >
      <div
        className="main"
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          borderRadius: '20px',
          zIndex: 1,
        }}
      >
        <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,.4)',
          zIndex: 1,
          borderRadius:"20px"
        }}
      ></div>
      <video
        src="/video.mp4" 
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          position: 'relative',
          zIndex: 0,
        }}
      />
      <div
        className="content"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          zIndex: 2,
        }}
      >
        <h1>Welcome</h1>
        {/* <div className="section-title">
                          <span className="subtitle bg-white-opacity d-inline-block">
                          Unlock Your Potential at London College:
                          </span>
                        </div> */}
    {/* <h1 className="title w-700">
                  
                          <strong className="color-white">
                          Where Knowledge Meets Opportunity
                          </strong>
                        </h1> */}
      </div>
      </div>
    </div>
  );
};

export default Main;
