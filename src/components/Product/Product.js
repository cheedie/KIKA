import React from "react";
import "../../styles/Home/product.scss";
import { Link } from "react-router-dom";
import "../../styles/product/addToCart.scss";

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
              <p className="product__price">NGN {price}</p>
              <button
                style={{
                  padding: "0.75rem",
                  background: "#f15a24",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "400",
                  border: "none",
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Product;
