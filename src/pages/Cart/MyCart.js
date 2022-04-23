import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";

import { cartObjOne, cartObjTwo } from '../../data/Cart/MyCartData';

import CartCard from "../../components/Cart/CartCard";

import "../../styles/CartStyles/MyCart.css";
import { useCartContext } from "../../context/cart_context";

const MyCart = () => {
  const { cart } = useCartContext();
  return (

             
    <>
      <Navbar />
      <section className="cart_wrapper">
        <div className="cart_title">
          <h2>MyCart</h2>
        </div>
        <div className="cart_container">
          <div className="card">
            {cart.map((item) => {
              return <CartCard {...item} key={item.id} />;
            })}
            {/* <div></div> */}
          </div>
          <div className="cartSummary">
            <div>
              <h2>Cart Summary</h2>
              <div className="summary_Details">
                <p>Blue Top</p>
                <p>N3,500</p>
              </div>
              <div className="summary_Details">
                <p>Blue Top</p>
                <p>N3,500</p>
              </div>
              <div className="subtotal_Details">
                <p>SubTotal</p>
                <p>N7,500</p>
              </div>
              <div>
                <button
                  type="submit"
                  id="waitlist-btn"
                  className="waitlist-btn"
                >
                  <Link to="">Checkout</Link>
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MyCart;
