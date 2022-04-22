import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import CartCard from '../../components/Cart/CartCard';
import { cartObjOne, cartObjTwo } from '../../data/Cart/MyCartData';
import "../../styles/CartStyles/MyCart.css";

const MyCart = () => {
  return (
        <>
          <Navbar />
          <section className='cart_wrapper'>
            <div className='cart_title'>
              <h2>MyCart</h2>
            </div>
            <div className='cart_container'>
              <div className='card'>
                <div>
                  <CartCard {...cartObjOne} />
                </div>
                <div>
                  <CartCard {...cartObjTwo} />
                </div>
                <div>
                  <CartCard {...cartObjOne} />
                </div>
                <div>
                  <CartCard {...cartObjTwo} />
                </div>
              </div>
              <div className='cartSummary'>
                  <h2>Cart Summary</h2>
                  <div className='summary_Details' >
                    <p>Blue Top</p>
                    <p>N3,500</p>
                  </div>
                  <div className='summary_Details' >
                    <p>Blue Top</p>
                    <p>N3,500</p>
                  </div>
                  <div className='subtotal_Details' >
                    <p>SubTotal:</p>
                    <p>N7,500</p>
                  </div>
                  <div className="cart-btn-container">
                    <button type="submit" id='contact-btn' className="contact-btn">
                      <Link to="" >Checkout</Link>
                    </button>
                  </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
  )
}

export default MyCart