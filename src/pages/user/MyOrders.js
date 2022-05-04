import React, { useState, useEffect } from "react";
import Sidebar from "../../components/User/Sidebar";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/landing-page/Navbar";
import PendingOrders from "../../components/User/PendingOrders";
import ReceivedOrder from "../../components/User/ReceivedOrder";
import NavMiddle from "../../components/User/NavMiddle";
import { useOrderContext } from "../../context/order_context";

import EmptyCart from "../../pages/Cart/EmptyCart";
const MyOrders = () => {
  const [orders, setOrders] = useState("pending");
  const { getOrder } = useOrderContext();

  // if (orderDetails.length < 1) {
  //   return <EmptyCart />;
  // }

  useEffect(() => {
    getOrder();
  }, []);
  return (
    <main>
      <Navbar />
      <NavMiddle deft={2} />

      <section className="user__account-container">
        <Sidebar deft={2} />
        <section className="user__account">
          <p className="user__account-title">MY Orders</p>
          <div className="user__order-container">
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
          </div>
          {orders === "pending" && <PendingOrders />}

          {orders === "received" && <ReceivedOrder />}
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default MyOrders;
