/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
  faTimes,
  faBars,
} from '@fortawesome/fontawesome-free-solid';
import './Header.css';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleSearch = () => {
    setToggleSearch(!toggleSearch);
  };

  const handleForm = () => {
    setToggleForm(!toggleForm);
  };
  return (
    <div>
      <header>
        <div id="menu-bar">
          <FontAwesomeIcon icon={faBars} onClick={handleMenu} />
        </div>

        <a href="#" className="logo">
          <span>T</span>ravel
        </a>

        <nav className={toggleMenu ? 'navbar active' : 'navbar'}>
          <a href="#home">home</a>
          <a href="#book">book</a>
          <a href="#packages">packages</a>
          <a href="#services">services</a>
          <a href="#gallery">gallery</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
        </nav>

        <div className="icons">
          <FontAwesomeIcon
            icon={faSearch}
            className="i"
            onClick={handleSearch}
          />
          <FontAwesomeIcon icon={faUser} className="i" onClick={handleForm} />
        </div>

        <form
          action=""
          className={
            toggleSearch
              ? 'search-bar-container active'
              : 'search-bar-container'
          }
        >
          <input type="search" id="search-bar" placeholder="search here..." />
          <label for="search-bar" className="fas fa-search"></label>
        </form>
      </header>

      <div
        className={
          toggleForm ? 'login-form-container active' : 'login-form-container'
        }
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="form-close"
          onClick={handleForm}
        />

        <form action="">
          <h3>login</h3>
          <input type="email" className="box" placeholder="enter your email" />
          <input
            type="password"
            className="box"
            placeholder="enter your password"
          />
          <input type="submit" value="login now" className="btn" />
          <input type="checkbox" id="remember" />
          <label for="remember">remember me</label>
          <p>
            forget password? <a href="#">click here</a>
          </p>
          <p>
            don't have and account? <a href="#">register now</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Header;
