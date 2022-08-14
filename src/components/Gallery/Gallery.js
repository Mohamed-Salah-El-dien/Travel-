import React from 'react';
import img1 from '../../assets/images/g-1.jpg';
import img2 from '../../assets/images/g-2.jpg';
import img3 from '../../assets/images/g-3.jpg';
import img4 from '../../assets/images/g-4.jpg';
import img5 from '../../assets/images/g-5.jpg';
import img6 from '../../assets/images/g-6.jpg';
import img7 from '../../assets/images/g-7.jpg';
import img8 from '../../assets/images/g-8.jpg';
import img9 from '../../assets/images/g-9.jpg';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">
        <span>g</span>
        <span>a</span>
        <span>l</span>
        <span>l</span>
        <span>e</span>
        <span>r</span>
        <span>y</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src={img1} alt="" />
          <div className="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <button className="btn">see more</button>
          </div>
        </div>
        <div className="box">
          <img src={img2} alt="" />
          <div className="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <button className="btn">see more</button>
          </div>
        </div>
        <div className="box">
          <img src={img3} alt="" />
          <div className="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <button className="btn">see more</button>
          </div>
        </div>
        <div className="box">
          <img src={img4} alt="" />
          <div className="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <button className="btn">see more</button>
          </div>
        </div>
        <div className="box">
          <img src={img5} alt="" />
          <div className="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <button className="btn">see more</button>
          </div>
        </div>
        <div className="box">
          <img src={img6} alt="" />
          <div className="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <button className="btn">see more</button>
          </div>
        </div>
        <div className="box">
          <img src={img7} alt="" />
          <div className="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <button className="btn">see more</button>
          </div>
        </div>
        <div className="box">
          <img src={img8} alt="" />
          <div className="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <button className="btn">see more</button>
          </div>
        </div>
        <div className="box">
          <img src={img9} alt="" />
          <div className="content">
            <h3>amazing places</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              tenetur.
            </p>
            <button className="btn">see more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
