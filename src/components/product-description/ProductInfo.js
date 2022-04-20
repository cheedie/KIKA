import React from 'react';
import '../../styles/product/productDetails.scss';
import { MdOutlineStarBorder } from 'react-icons/md';
import Product from '../Product/Product';
import Dress from '../../assets/product-details/dress.png';
import Model from '../../assets/product-details/model-in-dress.png';

const ProductInfo = () => {
  return (
    <section className="productInfo__container">
      <div className="content">
        <img src={Dress} alt="dress" />
        <img src={Model} alt="model-in-dress" />
        <section className="product__data">
          <h3>FLORAL SLIT DRESS</h3>
          <p>
            Size: <span>8M</span>
          </p>
          <p>
            Grade: <span>A</span>
          </p>
          <p>
            Clolor: <span>Black</span>
          </p>
          <p>
            Type: <span>Short</span>
          </p>
          <p>
            Vendor: <span>Burnirush</span>
          </p>
          <p>
            Price: <span>NGN 3500</span>
          </p>
          <div>
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
          </div>
          <button>Add to cart</button>
        </section>
      </div>
      <div className='share__this__product'>
        <p>SHARE THIS PRODUCT</p>
        <p>COPY LINK</p>
      </div>

      <div className="more__products">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default ProductInfo;
