import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/user/user.css";
import signImage from "../../assets/user/sign-in.png";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";

import { useUserContext } from "../../context/user_context";
import Alert from "../../components/User/Alert";

const Signup = () => {
  const navigate = useNavigate();
  const { uploadUserDetails } = useUserContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (name === "" && email === "" && password === "") {
      setAlert({ show: true, type: "danger", msg: "please enter value" });
    } else if (!terms) {
      setAlert({
        show: true,
        type: "danger",
        msg: "Kindly accept terms to proceed",
      });
    } else {
      uploadUserDetails({
        name,
        email,
        password,
      });
      navigate("/user/signin");
    }
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
            <label className="sign__terms-container">
              <input
                onChange={() => setTerms(!terms)}
                className="sign__terms-btn"
                type="checkbox"
                checked={terms}
              />
              <div>
                <span className="sign__accept-txt">I accept the KIKA </span>
                <Link to="/termscondition" className="sign__terms-link">
                  TERMS & CONDITIONS
                </Link>
              </div>
            </label>
            {alert.show && <Alert {...alert} removeAlert={showAlert} />}
            <div className="sign__sign-btn-container">
              <button type="submit" className="sign__up-btn">
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
