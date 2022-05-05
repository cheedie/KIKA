import React, { useState, useEffect } from "react";
import Loading from "../../components/User/Loading";
import Error from "../../components/User/Error";
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
    userDetails,
    user_details_loading: loading,
    user_details_error: error,
    deliveryDetails,
    getUser,
  } = useUserContext();
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  useEffect(() => {
    getState();
    getUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getCity(state);
    // eslint-disable-next-line
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: userDetails.name,
      phone: userDetails.phone,
      deliveryAddress: { state, city, street },
    };
    if (street === "" && city === "" && state === "") {
      setAlert({ show: true, type: "danger", msg: "please enter value" });
    } else {
      deliveryDetails(data, navigate);
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <section className="delivery_form_wrapper">
        <div className="delivery_form_container">
          <div className="delivery_title">
            <h2>DELIVERY DETAILS</h2>
          </div>
          <form className="delivery_details_form">
            <input id="name" value={userDetails.name} readOnly />
            <input id="phoneNumber" readOnly value={userDetails.phone} />
            <select
              id="state"
              name="state"
              value={state}
              // defaultValue="State"
              onChange={(e) => setState(e.target.value)}
            >
              <option value="0">State</option>
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
            >
              <option value="0">City/town</option>
              {cityDetails.map((item) => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <input
              id="street"
              type="text"
              placeholder="Street address"
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
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
