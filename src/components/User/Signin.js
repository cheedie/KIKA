import React from "react";
import { Link } from "react-router-dom";
import "../../styles/user/user.css";
import signImage from "../../assets/user/sign-in.png";
import Navbar from "../landing-page/Navbar";
import Footer from "../landing-page/Footer";

const Signin = () => {
  return (
    <main>
      <Navbar />
      <section className="sign__main-container">
        <div className="sign__form-section">
          <h3 className="sign__txt">Sign In</h3>
          <form action="" className="sign__form-group">
            <label htmlFor="email address" className="sign__form-label">
              Email Address
            </label>
            <input className="sign__form-input" type="email" />
            <label htmlFor="password" className="sign__form-label">
              Password
            </label>
            <input type="password" className="sign__form-input" />
            <div className="sign__forgot-container">
              <div>
                <button className="sign__terms-btn"></button>

                <span
                  className="sign__accept-txt"
                  style={{ paddingLeft: "0.65rem" }}
                >
                  Remember Me
                </span>
              </div>
              <Link to="/" className="sign__terms-link">
                Forgot Password
              </Link>
            </div>
            <div className="sign__sign-btn-container">
              <button type="submit" className="sign__up-btn">
                SIGN IN
              </button>
            </div>

            <div style={{ textAlign: "center" }}>
              <span className="sign__account-txt">Don't have an account? </span>
              <Link to="/buyer/signup" className="sign__link">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
        <div className="sign__img-container">
          <img src={signImage} alt="" />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Signin;
