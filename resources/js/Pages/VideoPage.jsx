import React, { useState } from "react";
import playButton from "../../assets/play-button.png";
import "../../css/VideoPage.css";
import "../../css/app.css";

const VideoPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayButtonClick = () => {
    setShowVideo(true); 
  };

  return (
    <div className="video-wrapper">
      <div className="video-page">
        {!showVideo ? (
          <div className="overlay">
            <img
              src={playButton}
              alt="Play"
              className="play-button"
              onClick={handlePlayButtonClick}
            />
          </div>
        ) : (
          <div className="video-container">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/dzqYxMuG7W0?autoplay=1"  
              title="Rick Roll"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPage;
