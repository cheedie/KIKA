import React, { useEffect } from "react";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/landing-page/Navbar";
import Sidebar from "../../components/User/Sidebar";
import { useUserContext } from "../../context/user_context";

const UserAccount = () => {
  const { getUser, userDetails } = useUserContext();

  useEffect(() => {
    getUser();
  }, []);
  console.log(userDetails);
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
                <p>{userDetails.name}</p>
                <p>{userDetails.email}</p>
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
