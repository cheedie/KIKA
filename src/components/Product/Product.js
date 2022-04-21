import React from "react";
import "../../styles/Home/product.scss";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useProductContext } from "../../context/product_context";
import AddtoCart from "../Cart/AddtoCart";

const Product = ({ image, name, price, _id, size }) => {
  return (
    <section className="product">
      <div className="product__info">
        <Link to={`/products/${_id}`}>
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
            <p>NGN {price}</p>

            <AddtoCart />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Product;
