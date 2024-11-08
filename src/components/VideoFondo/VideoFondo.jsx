// src/components/VideoFondo.js
import React from 'react';
import fondoPantalla from '../../assets/fondoPantalla.mp4';
import './VideoFondo.css';  // Si tienes estilos adicionales

const VideoFondo = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop id="videoFondo">
        <source src={fondoPantalla} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoFondo;

