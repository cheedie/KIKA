import React from 'react';
import FooterLogo from '../../assets/landing-page/footer-logo.png';
import TwitterLogo from '../../assets/landing-page/twitter-logo.png';
import InstagramLogo from '../../assets/landing-page/instagram-logo.png';
import EmailLogo from '../../assets/landing-page/email-logo.png';
import FacebookLogo from '../../assets/landing-page/facebook-logo.png';
import '../../styles/landing/footer.scss';

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
            Subscribe to our newsletter to get updates on our latest
            arrivals and offers
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
              <li>Track Order</li>
              <li>Report a Product</li>
              <li>Report a Product</li>
              <li>Sell On Kika</li>
              <li>How to Return a Product on KIKA</li>
              <li>Delivery Options and Timelines</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer__sectionTwo">
            <h3>ABOUT KIKA</h3>
            <ul>
              <li>About Us</li>
              <li>Our Policies</li>
              <li>Terms and Conditions</li>
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