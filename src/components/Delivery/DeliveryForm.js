import React from 'react'
import "../../styles/CartStyles/Delivery.css";

const DeliveryForm = () => {
  return (
    <>
        <section className='delivery_form_wrapper'>
            <div className="delivery_form_container">
                <div className="delivery_title">
                    <h2>DELIVERY DETAILS</h2>
                </div>
                <form className="delivery_details_form">
                    <input
                        id="name"
                        type="text"
                        placeholder="Full name"
                    />
                    <input
                        id="phoneNumber"
                        type="number"
                        placeholder="Phone number"
                    />
                    <input
                        id="state"
                        type="text"
                        placeholder="State"
                    />
                    <input
                        id="city"
                        type="text"
                        placeholder="City/town"
                    />
                    <input
                        id="address"
                        type="text"
                        placeholder="Street address"
                    />
                    <div className="delivery_btn_container">
                        <button
                        type="submit"
                        id="delivery-btn"
                        className="delivery-btn"
                        >
                        Proceed
                        </button>
                    </div>  
                </form>
            </div>
        </section>
    </>
  )
}

export default DeliveryForm;