import React, { useEffect, useState } from "react";
import Loading from "../../components/User/Loading";
import Error from "../../components/User/Error";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import visacard from "../../assets/cart/visa_card.png";
import mastercard from "../../assets/cart/master_card.png";
import AmountButtons from "../../components/Cart/AmountButtons";
import "../../styles/CartStyles/Payment.css";
import { useCartContext } from "../../context/cart_context";
import { useUserContext } from "../../context/user_context";
import Alert from "../../components/User/Alert";
import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../../context/order_context";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import logo from "../../assets/landing-page/logo.png";

const Checkout = () => {
  const navigate = useNavigate();
  const {
    cart,
    total_amount,
    shipping_fee,
    tax,
    total_items,
  } = useCartContext();
  const { placeOrder } = useOrderContext();
  let total = total_amount + shipping_fee + tax;
  const {
    userDetails,
    user_details_loading: loading,
    user_details_error: error,
    getUser,
  } = useUserContext();

  // flutterwave configuration
  const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: `${total}`,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: `${userDetails?.email}`,
      name: `${userDetails?.name}`,
      phonenumber: `${userDetails?.phone}`,
    },
    customizations: {
      title: "Kika store",
      description: "Payment for items in cart",
      logo: logo,
    },
  };

  const getCart = () => {
    return cart.map((item) => {
      return {
        product: item.id,
        vendor: item.vendor,
        name: item.name,
        price: item.price,
        quantity: total_items,
      };
    });
  };

  const fwConfig = {
    ...config,
    text: "Pay with flutterwave!",
    callback: (response) => {
      if (response.status === "successful") {
        console.log(response);

        // create order
        placeOrder(
          {
            orderItems: getCart(),
            totalPrice: total,
            paymentMethod: debit ? "card" : "debit",
            paymentInfo: {
              transactionId: response.transaction_id,
              currency: response.currency,
              gateway: "flutterwave",
              status: response.status,
            },
          },
          navigate
        );

        closePaymentModal(); // this will close the modal programmatically
      } else if (response.status === "error") {
        console.log("error");
      }
    },
    onClose: () => {},
  };

  const [debit, setDebit] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const [placingOrder, setPlacingOrder] = useState(false);

  useEffect(() => {
    getUser();

    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Navbar />
      <section id="payment_options">
        <div className="details_container">
          <div className="address_details_container">
            <h1>1. ADDRESS DETAILS</h1>
            <div className="address_details">
              <p>{userDetails?.name}</p>
              <p>{userDetails?.deliveryAddress?.street}</p>
              <p>+234{userDetails?.phone?.substring(1)}</p>
            </div>
            <div className="details_button">
              <button className="change_button">CHANGE</button>
            </div>
          </div>
          <div className="address_details_container">
            <h1>2. DELIVERY DETAILS</h1>
            <div className="address_details">
              <p>DOOR STEP DELIVERY</p>
              <p>
                Delivered between{" "}
                <span className="step_delivery">MONDAY 28 MARCH</span> and{" "}
                <span className="step_delivery">THURSDAY 31 MARCH</span>
              </p>
            </div>
            <div className="details_button">
              <button className="change_button">CHANGE</button>
            </div>
          </div>
          <div className="address_details_container">
            <h1>3. PAYMENT METHOD</h1>
            <div className="address_details">
              <p></p>
              <label className="debit_cards">
                <input
                  type="checkbox"
                  onChange={() => setDebit(!debit)}
                  checked={debit}
                />
                <p>DEBIT/CREDIT CARDS</p>
              </label>
              <div className="debit_cards_img">
                <img src={mastercard} alt="mastercard_image" />
                <img src={visacard} alt="visacard_image" />
              </div>
              <label className="debit_cards">
                <input
                  type="checkbox"
                  onChange={() => setTransfer(!transfer)}
                  checked={transfer}
                />
                <p>BANK TRANSFERS</p>
              </label>
              <p id="pay_account">Pay into this account</p>
              <p id="pay_details">Account Name: Kika limited</p>
              <p id="pay_details">Account Number: 3043123425</p>
              <p id="pay_details">Bank Name: First Bank Nig. Plc</p>
              <div className="upload_receipt">
                <p>Upload your transaction receipt</p>
                <input placeholder="upload transaction receipt" />
              </div>
              <div className="delivery_btn_container">
                <FlutterWaveButton
                  {...fwConfig}
                  className="delivery-btn"
                  disabled={!debit}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modify_cart_wrapper">
          <div className="modify_cart_container">
            <h1>CART SUMMARY</h1>
            {cart.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <div className="modify_card">
                    <div className="modify_card_img">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="modify_details">
                      <p
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {item.name}
                      </p>
                      <div className="modify_cart_footer">
                        <p
                          style={{
                            fontWeight: "bold",
                          }}
                          className="modify_price"
                        >
                          NGN {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}

            <div className="modify_cart_summary">
              <div className="modify_cart_subtotal">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Subtotal
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  NGN {total_amount}
                </p>
              </div>
              <div className="modify_cart_subtotal">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Delivery
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  NGN {shipping_fee}
                </p>
              </div>
              <div className="modify_cart_subtotal">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Tax
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  NGN {tax}
                </p>
              </div>
              <div className="modify_cart_total">
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Total
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  NGN {total}
                </p>
              </div>
            </div>
            <div id="payment-btn" className="delivery_btn_container">
              <button type="submit" className="delivery-btn">
                Modify cart
              </button>
            </div>
          </div>

          <div className="livechat_container">
            <h1>Need help</h1>
            <p>Contact an expert to support you</p>
            <div className="delivery_btn_container">
              <button type="submit" id="delivery-btn" className="delivery-btn">
                Livechat
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
