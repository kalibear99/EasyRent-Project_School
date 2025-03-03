import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import playButton from "../../assets/play-button.png"; 
import "../../css/VideoPage.css"; 


const VideoPage = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="video-wrapper">
      <div className="video-page">
        <div className="overlay">
          <img
            src={playButton}
            alt="Play"
            className="play-button"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Rick Roll"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
};

export default VideoPage;
