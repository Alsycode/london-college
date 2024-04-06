import React, { useState } from "react";

const VideoCarousel = ({ videoData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPlayer, setShowPlayer] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openPlayer = (url) => {
    setVideoUrl(url);
    setShowPlayer(true);
  };

  const closePlayer = () => {
    setShowPlayer(false);
    setVideoUrl("");
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === videoData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? videoData.length - 1 : prevSlide - 1
    );
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        marginBottom: "50px",
        borderRadius: "20px",
        padding: "20px",
        background: "rgba(156, 155, 152, 0.25)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      
    }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Our Success stories
      </h1>
      <div style={{ position: "relative", overflow: "hidden" }}>
        {videoData?.data?.map((videoObj, index) => (
          <div
            key={videoObj.id}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              display: index === currentSlide ? "flex" : "none",
              alignItems: "center",
              flexDirection: "column", // Stack items vertically on small screens
              textAlign: "center", // Center text on small screens
            }}
          >
            <div style={{ width: "100%", height: "50vh", borderRadius: "20px" }}>
              <img
                src={videoObj?.attributes?.videoimage?.data?.attributes?.formats?.small?.url}
                alt={videoObj.attributes?.title}
                className="carousel-image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <button
                className="play-button"
                onClick={() => openPlayer(videoObj?.attributes?.Video?.data?.attributes?.url)}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "transparent",
                  border: "none",
                  fontSize: "40px",
                  color: "#fff",
                  cursor: "pointer",
                  zIndex: "2",
                }}
              >
                <i className="fas fa-play"></i>
              </button>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h3>{videoObj?.attributes?.title}</h3>
              <p>{videoObj?.attributes?.Description}</p>
            </div>
          </div>
        ))}
        <button
          className="prev-button"
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            zIndex: "999",
          }}
        >
          &#10094;
        </button>
        <button
          className="next-button"
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            zIndex: "999",
          }}
        >
          &#10095;
        </button>
      </div>
      {showPlayer && (
        <div
          className="video-player"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "9999",
            background: "#fff",
            padding: "20px",
          }}
        >
          <button
            className="close-button"
            onClick={closePlayer}
            style={{ float: "right" }}
          >
            Close
          </button>
          <iframe
            src={videoUrl}
            width="560"
            height="315"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Embedded Video Player"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
