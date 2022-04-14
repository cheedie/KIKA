import React from "react";
import Sidebar from "../../components/User/Sidebar";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/landing-page/Navbar";

const TrackOrders = () => {
  return (
    <main>
      <Navbar />
      <section className="user__account-container">
        <Sidebar deft={4} />
        <div>track orders</div>
      </section>
      <Footer />
    </main>
  );
};

export default TrackOrders;
