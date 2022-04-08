import React from "react";
import { Link } from "react-router-dom";
import "../../styles/user/user.css";
import signImage from "../../assets/user/sign-in.png";
import Navbar from "../generalComponents/Navbar";
import Footer from "../generalComponents/Footer";

const Signup = () => {
  return (
    <main>
      <Navbar />
      <section className="sign__main-container">
        <div className="sign__form-section">
          <h3 className="sign__txt">Sign Up</h3>
          <form action="" className="sign__form-group">
            <label htmlFor="full name" className="sign__form-label">
              Full Name
            </label>
            <input type="text" className="sign__form-input" />
            <label htmlFor="email address" className="sign__form-label">
              Email Address
            </label>
            <input className="sign__form-input" type="email" />
            <label htmlFor="password" className="sign__form-label">
              Password
            </label>
            <input type="password" className="sign__form-input" />
            <div className="sign__terms-container">
              <button className="sign__terms-btn"></button>
              <div>
                <span className="sign__accept-txt">I accept the KIKA </span>
                <Link to="/" className="sign__terms-link">
                  TERMS & CONDITIONS
                </Link>
              </div>
            </div>
            <div className="sign__sign-btn-container">
              <button type="submit" className="sign__up-btn">
                SIGN UP
              </button>
            </div>

            <div style={{ textAlign: "center" }}>
              <span className="sign__account-txt">
                Already have an account?{" "}
              </span>
              <Link to="/buyer/signin" className="sign__link">
                Sign in
              </Link>
            </div>
          </form>
        </div>
        <div className="sign__img-container">
          <img src={signImage} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Signup;
