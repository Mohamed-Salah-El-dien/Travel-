import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Book from './Book/Book';
import Packages from './Packages/Packages';
import Services from './Services/Services';
import Gallery from './Gallery/Gallery';
import Review from './Review/Review';
import Contact from './Contact/Contact';
import Brand from './Brand/Brand';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Book />
      <Packages />
      <Services />
      <Gallery />
      <Review />
      <Contact />
      <Brand />
      <Footer />
    </div>
  );
};

export default Layout;
