import React from 'react';
import img from '../../assets/images/book-img.svg';
import './Book.css';

const Book = () => {
  return (
    <section className="book" id="book">
      <h1 className="heading">
        <span>B</span>
        <span>O</span>
        <span>O</span>
        <span>K</span>
        <span className="space"></span>
        <span>N</span>
        <span>O</span>
        <span>W</span>
      </h1>

      <div className="row">
        <div className="image">
          <img src={img} alt="" />
        </div>

        <form action="">
          <div className="inputBox">
            <h3>where to</h3>
            <input type="text" placeholder="place name" />
          </div>
          <div className="inputBox">
            <h3>how many</h3>
            <input type="number" placeholder="number of guests" />
          </div>
          <div className="inputBox">
            <h3>arrivals</h3>
            <input type="date" />
          </div>
          <div className="inputBox">
            <h3>leaving</h3>
            <input type="date" />
          </div>
          <input type="submit" className="btn" value="book now" />
        </form>
      </div>
    </section>
  );
};

export default Book;
