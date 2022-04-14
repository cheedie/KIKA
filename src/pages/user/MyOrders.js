import React from "react";
import Sidebar from "../../components/User/Sidebar";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/landing-page/Navbar";

const MyOrders = () => {
  return (
    <main>
      <Navbar />
      <section className="user__account-container">
        <Sidebar deft={2} />
        <div>my orders</div>
      </section>
      <Footer />
    </main>
  );
};

export default MyOrders;
