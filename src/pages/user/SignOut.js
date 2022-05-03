import React from "react";
import Sidebar from "../../components/User/Sidebar";
import Footer from "../../components/landing-page/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavMiddle from "../../components/User/NavMiddle";

const SignOut = () => {
  return (
    <main>
      <Navbar />
      <NavMiddle deft={6} />

      <section className="user__account-container">
        <Sidebar deft={6} />
      </section>
      <Footer />
    </main>
  );
};

export default SignOut;
