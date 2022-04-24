import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import EmptyCartCard from '../../components/Cart/EmptyCartCard';
import { empCartObjOne, empCartObjTwo } from '../../data/Cart/EmptyCartData';
import EmptyCartImg from "../../assets/cart/Empty_cart_p.png"
import "../../styles/CartStyles/EmptyCart.css";

const EmptyCart = () => {
  return (
    <>
        <Navbar />
        <section className='emptyCart_container'>
            <div className='emptyCart_section'>
                <div className='cart_empty'>
                    <img src={EmptyCartImg} alt="Empty_cart_image" />
                </div>
                <h2 className='error_title'>Your cart is empty</h2>
                <p>Browse through our various categories and discover 
                    the best thrifted wears you can get</p>
                <div className='empty-btn-container'>
                    <button className='empty-btn'>
                        <Link to="">
                            Start Shopping
                        </Link>
                    </button>
                </div>
            </div>
            <div>
                <h1 className='empty_header'>Recently viewed</h1>
                <div className='cart_cards'>
                    <div>
                        <EmptyCartCard {...empCartObjOne} />
                    </div>
                    <div>
                        <EmptyCartCard {...empCartObjTwo} />
                    </div>
                    <div>
                        <EmptyCartCard {...empCartObjOne} />
                    </div>
                    <div>
                        <EmptyCartCard {...empCartObjTwo} />
                    </div>
                    <div>
                        <EmptyCartCard {...empCartObjOne} />
                    </div>
                    <div>
                        <EmptyCartCard {...empCartObjTwo} />
                    </div>
                    
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default EmptyCart