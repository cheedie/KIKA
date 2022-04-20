import React from 'react';
import Footer from '../landing-page/Footer';
import Navbar from '../landing-page/Navbar';
import Product from '../Product/Product';
import Sidebar from '../sidebar/Sidebar';
import '../../styles/MarketPlace/marketPlace.scss';

const MarketPlace = () => {
  return (
    <div className="marketPlace">
      <Navbar />
      <div className="marketPlace__content">
        <Sidebar />
        <section className="marketPlace__products">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MarketPlace;
