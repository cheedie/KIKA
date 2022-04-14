import React from "react";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/landing-page/Navbar";
import Sidebar from "../../components/User/Sidebar";

const ChangePassword = () => {
  return (
    <main>
      <Navbar />
      <section className="user__account-container">
        <Sidebar deft={5} />
        <div>Change Password</div>
      </section>
      <Footer />
    </main>
  );
};

export default ChangePassword;
