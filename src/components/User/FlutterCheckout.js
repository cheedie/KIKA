import React, { useEffect } from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useUserContext } from "../../context/user_context";
import { useCartContext } from "../../context/cart_context";
import logo from "../../assets/landing-page/logo.png";
import { useNavigate, Link } from "react-router-dom";

const FlutterCheckout = () => {
  const navigate = useNavigate();
  const { cart, total_amount, shipping_fee, tax } = useCartContext();
  const { userDetails, getUser } = useUserContext();

  let total = total_amount + shipping_fee + tax;

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  const config = {
    public_key: "FLWPUBK_TEST-5a7584c0650ee84e644a4914e77df787-X",
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

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);

      closePaymentModal(); // this will close the modal programmatically
      navigate("/ordersuccessful");
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <h1>Hello {userDetails?.name}</h1>
      <p>your total is : {total}</p>
      <FlutterWaveButton
        {...fwConfig}
        style={{
          cursor: "pointer",
          background: "#f15a24",
          padding: "30px",
          border: "transparent",
          color: "white",
        }}
      />
    </div>
  );
};

export default FlutterCheckout;
