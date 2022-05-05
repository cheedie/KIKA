import React from "react";
import FooterLogo from "../../assets/landing-page/footer-logo.png";
import TwitterLogo from "../../assets/landing-page/twitter-logo.png";
import InstagramLogo from "../../assets/landing-page/instagram-logo.png";
import EmailLogo from "../../assets/landing-page/email-logo.png";
import FacebookLogo from "../../assets/landing-page/facebook-logo.png";
import "../../styles/landing/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      {/* top section */}
      <section className="footer__topSection">
        <div className="footer__logoSection">
          <img src={FooterLogo} alt="footer logo" />
        </div>
        <div className="footer__subscribe">
          <h3>New to KIKA?</h3>
          <p>
            Subscribe to our newsletter to get updates on our latest arrivals
            and offers
          </p>
          <form className="footer__form">
            <input
              type="text"
              className="footer__email"
              placeholder="Your email address"
            />
            <button type="submit" className="footer__submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* bottom section */}
      <section className="footer__bottomSection">
        <div className="footer__top">
          <div className="footer__sectionOne">
            <h3>HELP AND INFORMATION</h3>
            <ul>
              <li>Help Center</li>
              <Link to="/user/account/trackorder">
                <li>Track Order</li>
              </Link>

              <li>Report a Product</li>
              <Link to="/vendor">
                <li>Sell On Kika</li>
              </Link>
              <li>How to Return a Product on KIKA</li>
              <li>Delivery Options and Timelines</li>
              <Link to="/aboutus">
                <li>FAQ</li>
              </Link>
            </ul>
          </div>
          <div className="footer__sectionTwo">
            <h3>ABOUT KIKA</h3>
            <ul>
              <li>About Us</li>
              <Link to="/ourpolicy">
                <li>Our Policies</li>
              </Link>

              <Link to="/termscondition">
                <li>Terms and Conditions</li>
              </Link>
            </ul>
          </div>
          <div className="footer__sectionThree">
            <h3>CONTACT US</h3>
            <div className="footer__icons">
              <img src={TwitterLogo} alt="twitter logo" />
              <img src={InstagramLogo} alt="instagram logo" />
              <img src={EmailLogo} alt="email logo" />
              <img src={FacebookLogo} alt="facebook logo" />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2022 KIKA</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
