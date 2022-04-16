import React from "react";
import "../../styles/Home/product.scss";
import { formatPrice } from "../../utils/helpers";

const Product = ({ image, name, price, id, size }) => {
  return (
    <section className="product">
      <div className="product__info">
        <div className="info__left">
          <img src={image} alt="" />
          <h3 className="product__title">{name}</h3>
          <p className="product__description">Size: {size} </p>
          <div className="product__colors">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="info__right">
          <p>{formatPrice(price)}</p>
          <button>ADD TO CART</button>
        </div>
      </div>
    </section>
  );
};

export default Product;
