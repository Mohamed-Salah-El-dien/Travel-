import React, { useState } from 'react';
import vid1 from '../../assets/images/vid-1.mp4';
import vid2 from '../../assets/images/vid-2.mp4';
import vid3 from '../../assets/images/vid-3.mp4';
import vid4 from '../../assets/images/vid-4.mp4';
import vid5 from '../../assets/images/vid-5.mp4';
import './Hero.css';

const Hero = () => {
  const [video1, setVideo1] = useState(true);
  const [video2, setVideo2] = useState(false);
  const [video3, setVideo3] = useState(false);
  const [video4, setVideo4] = useState(false);
  const [video5, setVideo5] = useState(false);

  const handleVid1 = () => {
    setVideo1(true);
    setVideo2(false);
    setVideo3(false);
    setVideo4(false);
    setVideo5(false);
  };
  const handleVid2 = () => {
    setVideo2(true);
    setVideo1(false);
    setVideo3(false);
    setVideo4(false);
    setVideo5(false);
  };
  const handleVid3 = () => {
    setVideo3(true);
    setVideo1(false);
    setVideo2(false);
    setVideo4(false);
    setVideo5(false);
  };
  const handleVid4 = () => {
    setVideo4(true);
    setVideo1(false);
    setVideo2(false);
    setVideo3(false);
    setVideo5(false);
  };
  const handleVid5 = () => {
    setVideo5(true);
    setVideo1(false);
    setVideo2(false);
    setVideo3(false);
    setVideo4(false);
  };

  function handleRotation() {
    if (video1) {
      return vid1;
    } else if (video2) {
      return vid2;
    } else if (video3) {
      return vid3;
    } else if (video4) {
      return vid4;
    } else if (video5) {
      return vid5;
    }
  }
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>adventure is worthwhile</h3>
        <p>dicover new places with us, adventure awaits</p>
        <button className="btn">discover more</button>
      </div>

      <div className="controls">
        <span
          className={video1 ? 'vid-btn active' : 'vid-btn'}
          data-src={vid1}
          onClick={handleVid1}
        ></span>
        <span
          className={video2 ? 'vid-btn active' : 'vid-btn'}
          data-src={vid2}
          onClick={handleVid2}
        ></span>
        <span
          className={video3 ? 'vid-btn active' : 'vid-btn'}
          data-src={vid3}
          onClick={handleVid3}
        ></span>
        <span
          className={video4 ? 'vid-btn active' : 'vid-btn'}
          data-src={vid4}
          onClick={handleVid4}
        ></span>
        <span
          className={video5 ? 'vid-btn active' : 'vid-btn'}
          data-src={vid5}
          onClick={handleVid5}
        ></span>
      </div>

      <div className="video-container">
        <video
          src={handleRotation()}
          id="video-slider"
          loop
          autoPlay
          muted
          type="video/mp4"
        />
      </div>
    </section>
  );
};

export default Hero;
