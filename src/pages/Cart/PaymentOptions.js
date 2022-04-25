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
                <div className="address_details_container">
                    <h1>1. ADDRESS DETAILS</h1>
                    <div className="address_details">
                        <p>JERRY UKE</p>
                        <p>Plot 645 G Close Avenue, Ajah Lagos State.</p>
                        <p>+234-908-876-5432</p>
                    </div>
                    <div className='details_button'>
                        <button className='change_button'>CHANGE</button>
                    </div> 
                </div>
                <div className="address_details_container">
                    <h1>2. DELIVERY DETAILS</h1>
                    <div className="address_details">
                        <p>DOOR STEP DELIVERY</p>
                        <p>Delivered between <span className="step_delivery">MONDAY 28 MARCH</span> and <span className="step_delivery">THURSDAY 31 MARCH</span></p>
                    </div>
                    <div className='details_button'>
                        <button className='change_button'>CHANGE</button>
                    </div> 
                </div>
                <div className='address_details_container'>
                    <h1>3. PAYMENT METHOD</h1>
                    <div className='address_details'>
                        <p></p>
                        <div className='debit_cards'>
                            <input type="checkbox" />
                            <label>
                                DEBIT/CREDIT CARDS
                            </label>
                        </div>
                        <div className='debit_cards_img'>
                            <img src={mastercard} alt="mastercard_image" />
                            <img src={visacard} alt="visacard_image" />
                        </div>
                        <div className='debit_cards'>
                            <input type="checkbox" />
                            <label>
                                BANK TRANSFERS
                            </label>
                        </div>
                        <p id='pay_account'>Pay into this account</p>
                        <p id='pay_details'>Account Name: Kika limited</p>
                        <p id='pay_details'>Account Number: 3043123425</p>
                        <p id='pay_details'>Bank Name: First Bank Nig. Plc</p>
                        <div className="upload_receipt">
                            <p>Upload your transaction receipt</p>
                            <input  placeholder="upload transaction receipt" />
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
                </div>
            </div>
            <div className='modify_cart_wrapper'>
                <div className="modify_cart_container">
                    <h1>CART SUMMARY</h1>
                    <div className='modify_card'>
                        <div className='modify_card_img'>
                          <img src={modifycardImage} alt="Empty_cart_image" />
                        </div>
                        <div className='modify_details'>
                            <p>Blue top</p>
                            <div className='modify_cart_footer'>
                                <div className='footer_icons'>
                                    <FaMinusCircle className="card_icon" />
                                    <p>1</p>
                                    <FaPlusCircle className="card_icon" />
                                </div>
                                <p className='modify_price'>N3,500</p>
                            </div>
                        </div>
                    </div>
                    <div className='modify_card'>
                        <div className='modify_card_img'>
                          <img src={modifycardImage2} alt="Empty_cart_image" />
                        </div>
                        <div className='modify_details'>
                            <p>Blue top</p>
                            <div className='modify_cart_footer'>
                                <div className='footer_icons'>
                                    <FaMinusCircle className="card_icon" />
                                    <p>1</p>
                                    <FaPlusCircle className="card_icon" />
                                </div>
                                <p className='modify_price'>N3,500</p>
                            </div>
                        </div>
                    </div>
                    <div className='modify_cart_summary'>
                        <div className='modify_cart_subtotal'>
                            <p>Subtotal</p>
                            <p>NGN 7,800</p>
                        </div>
                        <div className='modify_cart_subtotal'>
                            <p>Delivery</p>
                            <p>NGN 1,000</p>
                        </div>
                        <div className='modify_cart_subtotal'>
                            <p>Tax</p>
                            <p>NGN 100</p>
                        </div>
                        <div className='modify_cart_total'>
                            <p>Total</p>
                            <p>NGN 8,900</p>
                        </div>
                    </div>
                    <div id="payment-btn" className="delivery_btn_container">
                        <button
                        type="submit"
                        className="delivery-btn"
                        >
                        Modify cart
                        </button>
                    </div>  
                </div>
                <div className='livechat_container'>
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