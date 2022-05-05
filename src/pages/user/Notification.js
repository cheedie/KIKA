import React, {useEffect} from "react";
import Sidebar from "../../components/User/Sidebar";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/landing-page/Navbar";
import NavMiddle from "../../components/User/NavMiddle";

import { useUserContext } from "../../context/user_context";

const Notification = () => {
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

  return (
    <main>
      <Navbar />
      <NavMiddle deft={3} />

      <section className="user__account-container">
        <Sidebar deft={3} />
        <div className="user__account">
          <p className="user__account-title">Notification</p>
          <div className="user__account-details">
            <p className="user__account-title">Your Order has been sent</p>
            <p>12.09pm, Sunday 27 March 2022</p>
            <div className="user__details-container">
              <div className="user__user-details">
                <p>
                  Hey {userDetails.name}, your order has been sent out today by the vendor
                  and you are expected to receive it between Monday, 28 March
                  and Thursday 30 March. You can track your order by using your
                  order tracking number{" "}
                  <span className="user__order-tracking">KIKA10000</span>
                </p>
              </div>
            </div>
          </div>
          <div className="user__account-details">
            <p className="user__account-title">Your Order has been sent</p>
            <p>12.09pm, Sunday 27 March 2022</p>
            <div className="user__details-container">
              <div className="user__user-details">
                <p>
                  Hey {userDetails.name}, your order has been sent out today by the vendor
                  and you are expected to receive it between Monday, 28 March
                  and Thursday 30 March. You can track your order by using your
                  order tracking number{" "}
                  <span className="user__order-tracking">KIKA10000</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Notification;
