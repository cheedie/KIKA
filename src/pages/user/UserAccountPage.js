import React from "react";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/landing-page/Navbar";
import Sidebar from "../../components/User/Sidebar";

const UserAccount = () => {
  return (
    <main>
      <Navbar />
      <section className="user__account-container">
        <Sidebar deft={1} />
        <div className="user__account">
          <p className="user__account-title">MY KIKA ACCOUNT</p>
          <div className="user__account-details">
            <p className="user__account-title">Account Details</p>
            <div className="user__details-container">
              <div className="user__user-details">
                <p>Jerry Uke</p>
                <p>jerryuke@gmail.com</p>
                <p>+234-908-876-5432</p>
              </div>
              <button className="user__edit-btn">EDIT</button>
            </div>
          </div>

          <div className="user__account-details">
            <p className="user__account-title">Shipping Address</p>
            <div className="user__details-container">
              <div className="user__user-details">
                <p>Plot 645 G Close Avenue, Ajah</p>
                <p>Lagos State.</p>
              </div>
              <button className="user__edit-btn">EDIT</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default UserAccount;
