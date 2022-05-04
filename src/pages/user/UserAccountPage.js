import React, { useEffect } from "react";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/User/Sidebar";
import { useUserContext } from "../../context/user_context";
import Loading from "../../components/User/Loading";
import Error from "../../components/User/Error";
import NavMiddle from "../../components/User/NavMiddle";

const UserAccount = () => {
  const {
    getUser,
    userDetails,
    user_details_loading: loading,
    user_details_error: error,
  } = useUserContext();

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <main>
      <Navbar />
      <NavMiddle deft={1} />

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
                <p>+234{userDetails.phone?.substring(1)}</p>
              </div>
              <button className="user__edit-btn">EDIT</button>
            </div>
          </div>

          <div className="user__account-details">
            <p className="user__account-title">Shipping Address</p>
            <div className="user__details-container">
              <div className="user__user-details">
                <p>{userDetails?.deliveryAddress?.street}</p>
                <p>
                  {userDetails?.deliveryAddress?.state.toUpperCase() + " "}
                  State
                </p>
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
