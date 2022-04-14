import React, { useState } from "react";
import Sidebar from "../../components/User/Sidebar";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/landing-page/Navbar";
import shorts from "../../assets/user/shorts.png";
import shirt from "../../assets/user/shirt.png";

const MyOrders = () => {
  const [orders, setOrders] = useState("pending");
  return (
    <main>
      <Navbar />
      <section className="user__account-container">
        <Sidebar deft={2} />
        <section className="user__account">
          <p className="user__account-title">MY Orders</p>
          <div className="user__order-container">
            <div>
              <button
                onClick={() => setOrders("pending")}
                className={
                  orders === "pending"
                    ? "user__order-btn-active"
                    : "user__order-btn"
                }
              >
                PENDING
              </button>
              {orders === "pending" && (
                <div>
                  <div className="user__account-details">
                    <div className="user__details-container">
                      <div className="user__order-image">
                        <img src={shorts} alt="" />
                      </div>
                      <div>
                        <p className="user__order-title">BLACK SHORTS</p>
                        <span className="user__order-unit">
                          <p>Unit: 1</p>
                          <p>NGN 3,500</p>
                        </span>
                        <span className="user__order-span">
                          ORDER IN PROGRESS
                        </span>

                        <p>Friday, April 20, 2022</p>
                      </div>
                      <button className="user__edit-btn">
                        SEE ORDER HISTORY
                      </button>
                    </div>
                  </div>
                  <div className="user__account-details">
                    <p className="user__account-title">Account Details</p>
                    <div className="user__details-container">
                      <img src={shirt} alt="" />
                      <div>
                        <p className="user__order-title">BLACK SHORTS</p>
                        <span>
                          <p>Unit: 1</p>
                          <p>NGN 3,500</p>
                        </span>
                        <span className="user__order-span">
                          ORDER IN PROGRESS
                        </span>

                        <p>Friday, April 20, 2022</p>
                      </div>
                      <button className="user__edit-btn">
                        SEE ORDER HISTORY
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setOrders("received")}
                className={
                  orders === "received"
                    ? "user__order-btn-active"
                    : "user__order-btn"
                }
              >
                RECEIVED
              </button>
              {orders === "received" && <div></div>}
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default MyOrders;
