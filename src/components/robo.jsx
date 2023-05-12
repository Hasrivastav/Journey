import React, { useState } from 'react';
import '../styles/bb8.css';

function Robo() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const handleMouseMove = (e) => {
    setPosX(e.clientX);
    setPosY(e.clientY);
  }

  return (
    <div className="bb8-container" onMouseMove={handleMouseMove}>
      <div className="bb8" style={{ top: posY, left: posX }}>
        <div className="bb8-head">
          <div className="bb8-eye bb8-eye-left"></div>
          <div className="bb8-eye bb8-eye-right"></div>
          <div className="bb8-antenna bb8-antenna-left"></div>
          <div className="bb8-antenna bb8-antenna-right"></div>
          <div className="bb8-dot bb8-dot-1"></div>
          <div className="bb8-dot bb8-dot-2"></div>
          <div className="bb8-dot bb8-dot-3"></div>
        </div>
        <div className="bb8-body"></div>
        <div className="bb8-wheel bb8-wheel-left"></div>
        <div className="bb8-wheel bb8-wheel-right"></div>
      </div>
    </div>
  );
}

export default Robo;
