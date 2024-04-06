import React, { useState, useEffect } from 'react';

const VideoSlider = ({ videoData }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === videoData?.data?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change video every 5 seconds
    return () => clearTimeout(timer);
  }, [currentVideoIndex, videoData?.data?.length]);

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoData?.data?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoData?.data?.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '600px', height: '338px', position: 'relative' }}>
          {videoData?.data.map((video, index) => (
            <video
              key={index}
              style={{
                display: index === currentVideoIndex ? 'block' : 'none',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              controls
              autoPlay={index === currentVideoIndex}
              muted={index !== currentVideoIndex}
            >
              <source src={video?.attributes?.Video?.data?.attributes?.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: 'rgba(0, 123, 255, 0.7)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handlePrev}>Previous</button>
        <button style={{ padding: '10px 20px', backgroundColor: 'rgba(0, 123, 255, 0.7)', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default VideoSlider;
