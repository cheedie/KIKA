import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/user/user.css";
import signImage from "../../assets/user/sign-in.png";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import Alert from "../../components/User/Alert";

import { useUserContext } from "../../context/user_context";
import { useVendorContext } from "../../context/vendor_context";
import CheckNetwork from "../../utils/CheckNetwork";

const Signin = ({user, vendor}) => {
  const { loginUser, getUser} = useUserContext();
  const { loginVendor, getVendor } = useVendorContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // const [isOnline, setIsOnline] = useState(CheckNetwork);
  const isOnline = async () => await CheckNetwork()
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("ISONLINE HERE", isOnline())
      
      if(!isOnline()){
        console.log("false isONLINE??? ", isOnline)
        setAlert({
          show: true,
          type: "danger",
          msg: "No internet connection, please connect to the internet and try again",
        });
      }else{
        let response;
      if(user){
          response = await loginUser({ email, password })
        }else if(vendor){
            response = await loginVendor({ email, password })
          }
      
        if (!response || response.status !== 200) {
        setAlert({
          show: true,
          type: "danger",
          msg: "Incorrect email or password",
        });
      } else if(response.data.role === 'user'){
        navigate("/user/account");
        getUser()
      }else if(response.data.role === 'vendor'){
        console.log("VENDOR logging")
        navigate("/vendor/");
        getVendor()
      }
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
          <h3 className="sign__txt">{vendor? "Vendor Sign in" : "Sign In"}</h3>
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
              type={showPassword ? "text":"password"}
              className="sign__form-input password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="sign__showPassword-container">
              <input
                onChange={()=> showPassword ? setShowPassword(false): setShowPassword(true)}
                className="sign__terms-btn"
                type="checkbox"
              />
                <span className="show_password-txt">Show password </span>
              
            </label>

            
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
                id="button"
                type="submit"
                className="sign__up-btn"
                disabled={email === "" && password === "" ? true : false}
              >
                SIGN IN
              </button>
            </div>

            <div style={{ textAlign: "center" }}>
              <span className="sign__account-txt">Don't have an account? </span>
              <Link to={vendor?"/vendor/signup":"/user/signup"} className="sign__link">
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
