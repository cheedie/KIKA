import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/user/user.css";
import signImage from "../../assets/user/sign-in.png";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import Alert from "../../components/User/Alert";

import { useUserContext } from "../../context/user_context";

const Signin = () => {
  const { loginUser } = useUserContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await loginUser({ email, password });
      console.log(response);
      if (!response || response.status !== 200) {
        setAlert({
          show: true,
          type: "danger",
          msg: "Incorrect email or password",
        });
      } else if(response.role === 'user'){
        navigate("/user/account");
      }else{
        navigate("/vendor");
      }
    } catch (error) {
      console.log(error);
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
          <h3 className="sign__txt">Sign In</h3>
          <form action="" className="sign__form-group" onSubmit={handleSubmit}>
            <label htmlFor="email address" className="sign__form-label">
              Email Address
            </label>
            <input
              className="sign__form-input"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="sign__form-label">
              Password
            </label>
            <input
              type="password"
              className="sign__form-input"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
            {alert.show && <Alert {...alert} removeAlert={showAlert} />}

            <div className="sign__sign-btn-container">
              <button
                type="submit"
                className="sign__up-btn"
                disabled={email === "" && password === "" ? true : false}
              >
                SIGN IN
              </button>
            </div>

            <div style={{ textAlign: "center" }}>
              <span className="sign__account-txt">Don't have an account? </span>
              <Link to="/user/signup" className="sign__link">
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
