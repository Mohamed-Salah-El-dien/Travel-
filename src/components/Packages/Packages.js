import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/fontawesome-free-solid';
import p1 from '../../assets/images/p-1.jpg';
import p2 from '../../assets/images/p-2.jpg';
import p3 from '../../assets/images/p-3.jpg';
import p4 from '../../assets/images/p-4.jpg';
import p5 from '../../assets/images/p-5.jpg';
import p6 from '../../assets/images/p-6.jpg';
import './Packages.css';

const Packages = () => {
  return (
    <section className="packages" id="packages">
      <h1 className="heading">
        <span>P</span>
        <span>A</span>
        <span>C</span>
        <span>K</span>
        <span>A</span>
        <span>G</span>
        <span>E</span>
        <span>S</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src={p1} alt="" />
          <div className="content">
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="i" />
              mumbai
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
            </div>
            <div className="price">
              $90.00 <span>$120.00</span>
            </div>
            <button className="btn">book now</button>
          </div>
        </div>

        <div className="box">
          <img src={p2} alt="" />
          <div className="content">
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="i" /> hawaii
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
            </div>
            <div className="price">
              $90.00 <span>$120.00</span>
            </div>
            <button className="btn">book now</button>
          </div>
        </div>

        <div className="box">
          <img src={p3} alt="" />
          <div className="content">
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="i" /> sydney
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
            </div>
            <div className="price">
              $90.00 <span>$120.00</span>
            </div>
            <button className="btn">book now</button>
          </div>
        </div>

        <div className="box">
          <img src={p4} alt="" />
          <div className="content">
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="i" /> paris
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
            </div>
            <div className="price">
              $90.00 <span>$120.00</span>
            </div>
            <button className="btn">book now</button>
          </div>
        </div>

        <div className="box">
          <img src={p5} alt="" />
          <div className="content">
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="i" /> tokyo
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
            </div>
            <div className="price">
              $90.00 <span>$120.00</span>
            </div>
            <button className="btn">book now</button>
          </div>
        </div>

        <div className="box">
          <img src={p6} alt="" />
          <div className="content">
            <h3>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="i" /> eypt
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, nam!
            </p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
              <FontAwesomeIcon icon={faStar} className="i" />
            </div>
            <div className="price">
              $90.00 <span>$120.00</span>
            </div>
            <button className="btn">book now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
