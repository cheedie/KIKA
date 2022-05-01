import React from 'react'
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import "../../styles/CartStyles/OrderSuccessful.css";
import successfulimg from "../../assets/cart/Success.png";

const OrderSuccessful = () => {
  return (
    <>
        <Navbar />
        <section className='successful_wrapper'>
            <div className='successful_container'>
                <div className='successful_image'>
                    <img src={successfulimg} alt="ORDER SUCCESSFUL" />
                </div>
                <div className='successful_title'>
                    <h2>Order Successfully Placed</h2>
                </div>
                <div className='successful_title'>
                    <p>Your order has successfully been placed, please find below your order details</p>
                </div>
                <div className='successful_details'>
                    <div className='success_sub_details'>
                        <p>Order</p>
                        <p>Amount Paid</p>
                        <p>Estimated Delivery Date</p>
                        <p>Location</p>
                        <p>Tracking Number</p>
                    </div>
                    <div className='success_sub_details2'>
                        <p>Black Dress</p>
                        <p>N3,500</p>
                        <p>28/03/22 - 31/03/22</p>
                        <p>Lagos, Nigeria</p>
                        <p>KIKA100000</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default OrderSuccessful