import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faBullhorn,
  faGlobe,
  faPlane,
  faHome,
  faBicycle,
} from '@fortawesome/fontawesome-free-solid';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h1 className="heading">
        <span>s</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={faHome} className="i" />

          <h3>affordable hotels</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            commodi earum, quis voluptate exercitationem ut minima itaque iusto
            ipsum corrupti!
          </p>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faUtensils} className="i" />
          <h3>food and drinks</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            commodi earum, quis voluptate exercitationem ut minima itaque iusto
            ipsum corrupti!
          </p>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faBullhorn} className="i" />
          <h3>safty guide</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            commodi earum, quis voluptate exercitationem ut minima itaque iusto
            ipsum corrupti!
          </p>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faGlobe} className="i" />
          <h3>around the world</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            commodi earum, quis voluptate exercitationem ut minima itaque iusto
            ipsum corrupti!
          </p>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faPlane} className="i" />
          <h3>fastest travel</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            commodi earum, quis voluptate exercitationem ut minima itaque iusto
            ipsum corrupti!
          </p>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faBicycle} className="i" />
          <h3>adventures</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            commodi earum, quis voluptate exercitationem ut minima itaque iusto
            ipsum corrupti!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
