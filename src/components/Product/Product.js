import React from "react";
import "../../styles/Home/product.scss";
import { formatPrice } from "../../utils/helpers";
import { useCartContext } from "../../context/cart_context";
import { Link } from "react-router-dom";
import { useProductContext } from "../../context/product_context";

const Product = ({ image, name, price, id, size }) => {
  const { addToCart } = useCartContext();

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
          <p>{price}</p>
          <Link to="/mycart" onClick={() => addToCart()}>
            ADD TO CART
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
