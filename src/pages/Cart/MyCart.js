import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import CartContent from "../../components/Cart/CartContent";
// import CartCard from "../../components/Cart/CartCard";
import "../../styles/CartStyles/MyCart.css";
import EmptyCart from "./EmptyCart";
const MyCart = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return <EmptyCart />;
  }
  return (
    <>
      <Navbar />
      <section className="cart_wrapper">
        <div className="cart_title">
          <h2>My Cart</h2>
        </div>
        <CartContent />
      </section>
      <Footer />
    </>
  );
};

export default MyCart;
