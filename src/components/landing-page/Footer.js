import React from 'react';
import FooterLogo from '../../assets/landing-page/footer-logo.png';
import '../../styles/landing/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__topSection">
        <div className="footer__logoSection">
          <img src={FooterLogo} alt="footer logo" />
        </div>
        <div className="footer__subscribe">
          <h3 className="footer__h3">New to KIKA?</h3>
          <p className="footer__p">
            Subscribe to our newsletter to get updates on our latest
            arrivals and offers
          </p>
          <form footer__form>
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
      </div>
      <div className="footer__bottomSection"></div>
    </div>
  );
};

export default Footer;
