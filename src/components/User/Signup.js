import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/user/user.css";
import signImage from "../../assets/user/sign-in.png";
import Navbar from "../landing-page/Navbar";
import Footer from "../landing-page/Footer";

import { useUserContext } from "../../context/user_context";

const Signup = () => {
  const navigate = useNavigate();
  const { uploadUserDetails } = useUserContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
    }
    uploadUserDetails({
      name,
      email,
      password,
    });
    navigate("/user/signin");
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  return (
    <main>
      <Navbar />
      <section className="sign__main-container">
        <div className="sign__form-section">
          <h3 className="sign__txt">Sign Up</h3>
          <form action="" className="sign__form-group" onSubmit={handleSubmit}>
            <label htmlFor="full name" className="sign__form-label">
              Full Name
            </label>
            <input
              type="text"
              className="sign__form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email address" className="sign__form-label">
              Email Address
            </label>
            <input
              className="sign__form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="sign__form-label">
              Password
            </label>
            <input
              type="password"
              className="sign__form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
              <button
                type="submit"
                className="sign__up-btn"
                disabled={
                  name === "" && email === "" && password === "" ? true : false
                }
              >
                SIGN UP
              </button>
            </div>

            <div style={{ textAlign: "center" }}>
              <span className="sign__account-txt">
                Already have an account?{" "}
              </span>
              <Link to="/user/signin" className="sign__link">
                Sign in
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

export default Signup;
