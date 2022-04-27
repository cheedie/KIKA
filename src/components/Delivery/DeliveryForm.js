import React, { useState, useEffect } from "react";
import Alert from "../../components/User/Alert";
import "../../styles/CartStyles/Delivery.css";
import { useUserContext } from "../../context/user_context";
import { useNavigate } from "react-router-dom";
const DeliveryForm = () => {
  const navigate = useNavigate();

  const {
    getState,
    stateDetails,
    getCity,
    cityDetails,
    deliveryDetails,
  } = useUserContext();
  const [FullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  useEffect(() => {
    getState();
    deliveryDetails();
  }, []);

  useEffect(() => {
    getCity(state);
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      FullName === "" &&
      phoneNumber === "" &&
      address === "" &&
      city === "" &&
      state === ""
    ) {
      setAlert({ show: true, type: "danger", msg: "please enter value" });
    } else {
      deliveryDetails({
        FullName,
        phoneNumber,
        state,
        city,
        address,
      });
      navigate("/payment");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <>
      <section className="delivery_form_wrapper">
        <div className="delivery_form_container">
          <div className="delivery_title">
            <h2>DELIVERY DETAILS</h2>
          </div>
          <form className="delivery_details_form">
            <input
              id="name"
              type="text"
              placeholder="Full name"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input id="phoneNumber" type="number" placeholder="Phone number" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} />
            <select
              id="state"
              name="state"
              value={state}
              defaultValue="State"
              onChange={(e) => setState(e.target.value)}
            >
              <option value="" disabled hidden>
                State
              </option>
              {stateDetails.map((item) => {
                return (
                  <option key={item.id} value={item.alias}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <select
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled hidden>
                City/town
              </option>
              {cityDetails.map((item) => {
                return (
                  <option key={item.id} value={item}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <input
              id="address"
              type="text"
              placeholder="Street address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            {alert.show && <Alert {...alert} removeAlert={showAlert} />}
            <div className="delivery_btn_container">
              <button
                type="submit"
                id="delivery-btn"
                className="delivery-btn"
                onClick={handleSubmit}
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default DeliveryForm;
