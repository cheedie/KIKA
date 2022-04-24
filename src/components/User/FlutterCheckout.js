import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useUserContext } from "../../context/user_context";

const FlutterCheckout = () => {
  const { getUser, userDetails } = useUserContext();

  const config = {
    public_key: "FLWPUBK-**************************-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: `${userDetails?.email}`,
      name: userDetails?.name,
      phonenumber: "07064586146",
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
      <h1>Hello Test user</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
};

export default FlutterCheckout;
