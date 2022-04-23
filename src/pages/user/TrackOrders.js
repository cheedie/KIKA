import React from "react";
import Sidebar from "../../components/User/Sidebar";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/landing-page/Navbar";
import map from "../../assets/user/map.png";

const TrackOrders = () => {
  return (
    <main>
      <Navbar />
      <section className="user__account-container">
        <Sidebar deft={4} />
        <div className="user__account">
          <p className="user__account-title">Track Orders</p>
          <div className="user__track-order-container">
            <div className="user__track-order-1">
              <p className="user__account-title">Track Orders</p>
              <p className="user__number-text">Lets help you find your order</p>
              <p className="user__number-text">
                Enter your tracking number to get the detail
              </p>
              <input type="text" placeholder="Tracking Number" />
              <button className="user__track-order-btn">TRACK ORDER</button>
            </div>
            <div className="user__track-order-2">
              <div className="user__track-order-2-titles">
                <h3>Date</h3>
                <h3>Time</h3>
                <h3>Location</h3>
                <h3>Status</h3>
              </div>
              <div className="user__track-order-2-titles">
                <p>28/03/2022</p>
                <p>10.00am</p>
                <p>Portharcourt</p>
                <p>Order sent</p>
              </div>
            </div>
          </div>
          <div className="user__track-order-container">
            <div className="user__track-order-1">
              <p className="user__account-title">Order Details</p>
              <div className="user__track-order-details">
                <div>
                  <p>Tracking Number</p>
                  <p>Estimated Delivery Day</p>
                  <p>Delivery Location</p>
                </div>
                <div>
                  <p>KIKA10000</p>
                  <p>Thur, 31 March, 2022</p>
                  <p>Lagos Nigeria</p>
                </div>
              </div>
            </div>
            <div className="user__map-image-container">
              <img src={map} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default TrackOrders;
