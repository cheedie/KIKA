import React from 'react';
import '../../styles/Home/product.scss';
import { formatPrice } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { useProductContext } from '../../context/product_context';
import AddtoCart from '../Cart/AddtoCart';

const Product = ({ image, name, price, _id, size }) => {
  return (
    <section className="product">
      <Link to={`/products/${_id}`}>
        <div className="product__container">
          <img className="productImage" src={image} alt={name} />
          <div className="product__description">
            <div className="product__left">
              <h3 className="product__name">{name}</h3>
              <p className="product__size">Size: {size} </p>
              <div className="product__color">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
              <div className="product__right">
              <p>NGN {price}</p>
              <AddtoCart />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Product;
