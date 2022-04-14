import React from "react";
import Sidebar from "../../components/User/Sidebar";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/landing-page/Navbar";

const Notification = () => {
  return (
    <main>
      <Navbar />
      <section className="user__account-container">
        <Sidebar deft={3} />
        <div>notifications</div>
      </section>
      <Footer />
    </main>
  );
};

export default Notification;
