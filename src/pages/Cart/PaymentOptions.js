import React from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import visacard from "../../assets/cart/visa_card.png"
import mastercard from "../../assets/cart/master_card.png"
import modifycardImage from "../../assets/cart/card_image2.png"
import modifycardImage2 from "../../assets/cart/card_image3.png"
import "../../styles/CartStyles/Payment.css";

const PaymentOptions = () => {
  return (
    <>
        <Navbar />
        <section id='payment_options'>
            <div className='details_container'>
                <div>
                    <h1>1. ADDRESS DETAILS</h1>
                    <div>
                        <p>JERRY UKE</p>
                        <p>Plot 645 G Close Avenue, Ajah Lagos State.</p>
                        <p>+234-908-876-5432</p>
                    </div>
                    <p>CHANGE</p>
                </div>
                <div>
                    <h1>2. DELIVERY DETAILS</h1>
                    <div>
                        <p>DOOR STEP DELIVERY</p>
                        <p>Delivered between <span className="step_delivery">MONDAY 28 MARCH</span> and <span className="step_delivery">THURSDAY 31 MARCH</span></p>
                    </div>
                    <p>CHANGE</p>
                </div>
                <div>
                    <h1>3. PAYMENT METHOD</h1>
                    <div>
                        <p></p>
                        <div className='debit_cards'>
                            <label>
                                <input type="checkbox" />
                                DEBIT/CREDIT CARDS
                            </label>
                        </div>
                        <div className='debit_cards_img'>
                            <img src={mastercard} alt="mastercard_image" />
                            <img src={visacard} alt="visacard_image" />
                        </div>
                        <div className='debit_cards'>
                            <label>
                                <input type="checkbox" />
                                BANK TRANSFERS
                            </label>
                        </div>
                        <p>Pay into this account</p>
                        <p>Account Name: Kika limited</p>
                        <p>Account Number: 3043123425</p>
                        <p>Bank Name: First Bank Nig. Plc</p>
                        <div className="upload_receipt">
                            <p>Upload your transaction receipt</p>
                            <input type="image" placeholder="upload transaction receipt" />
                        </div>
                        <div className="delivery_btn_container">
                            <button
                            type="submit"
                            id="delivery-btn"
                            className="delivery-btn"
                            >
                            Modify cart
                            </button>
                        </div>  
                    </div>
                </div>
            </div>
            <div className='modify_cart_wrapper'>
                <div className="modify_cart_container">
                    <h1>CART SUMMARY</h1>
                    <div className='modify_card'>
                        <img src={modifycardImage} alt="Empty_cart_image" />
                        <div>
                            <p>Blue top</p>
                            <div>
                                <div>
                                    <FaMinusCircle className="card_icon" />
                                    <p>1</p>
                                    <FaPlusCircle className="card_icon" />
                                </div>
                                <p>N3,500</p>
                            </div>
                        </div>
                    </div>
                    <div className='modify_card'>
                        <img src={modifycardImage2} alt="Empty_cart_image" />
                        <div>
                            <p>Blue top</p>
                            <div>
                                <div>
                                    <FaMinusCircle className="card_icon" />
                                    <p>1</p>
                                    <FaPlusCircle className="card_icon" />
                                </div>
                                <p>N3,500</p>
                            </div>
                        </div>
                    </div>
                    <div className='modify_cart_summary'>
                        <div className='modify_cart_total'>
                            <p>Subtotal</p>
                            <p>NGN 7,800</p>
                        </div>
                        <div className='modify_cart_total'>
                            <p>Delivery</p>
                            <p>NGN 1,000</p>
                        </div>
                        <div className='modify_cart_total'>
                            <p>Tax</p>
                            <p>NGN 100</p>
                        </div>
                        <div className='modify_cart_total'>
                            <p>Total</p>
                            <p>NGN 8,900</p>
                        </div>
                    </div>
                    <div className="delivery_btn_container">
                        <button
                        type="submit"
                        id="delivery-btn"
                        className="delivery-btn"
                        >
                        Proceed
                        </button>
                    </div>  
                </div>
                <div className='livechat'>
                    <h1>Need help</h1>
                    <p>Contact an expert to support you</p>
                    <div className="delivery_btn_container">
                        <button
                        type="submit"
                        id="delivery-btn"
                        className="delivery-btn"
                        >
                        Livechat
                        </button>
                    </div>
                </div>
            </div>
            
        </section>
        <Footer />
    </>
  )
}

export default PaymentOptions