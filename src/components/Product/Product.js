import React from 'react';
import '../../styles/Home/product.scss';

const Product = () => {
  return (
    <section className="product">
      <div className="product__info">
        <div className="info__left">
          <h3 className="product__title">STRIPE SHIRT</h3>
          <p className="product__description">Size L/XL/XXL</p>
          <div className="product__colors">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="info__right">
          <p>NGN 3,400</p>
          <button>ADD TO CART</button>
        </div>
      </div>
    </section>
  );
};

export default Product;
