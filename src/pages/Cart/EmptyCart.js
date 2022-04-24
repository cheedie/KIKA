import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import { useProductContext } from "../../context/product_context";
import Product from "../../components/Product/Product";

import EmptyCartCard from "../../components/Cart/EmptyCartCard";
import EmptyCartImg from "../../assets/cart/Empty_cart_p.png";
import "../../styles/CartStyles/EmptyCart.css";

const EmptyCart = () => {
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    products,
  } = useProductContext();

  return (
    <>
      <Navbar />
      <section className="emptyCart_container">
        <div className="emptyCart_section">
          <div className="cart_empty">
            <img src={EmptyCartImg} alt="Empty_cart_image" />
          </div>
          <h3 className="error_title">Your cart is empty</h3>
          <p>
            Browse through our various categories and discover the best thrifted
            wears you can get
          </p>
          <Link to="/products">Start Shopping</Link>
        </div>
        <div>
          <h1 className="empty_header">Recently viewed</h1>
          <div className="cart_cards">
            <div className="">
              {products
                .filter((_, index) => index < 5)
                .map((product) => {
                  return (
                    <Product
                      key={product._id}
                      {...product}
                      className="product"
                    />
                  );
                })}
              {/* <EmptyCartCard {...empCartObjOne} /> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EmptyCart;
