import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import "../../styles/StaticStyles/Aboutus.css";
import Eunice from "../../assets/user/Eunice.png";
import ifechi from "../../assets/user/ifechi.png";
import Joshua from "../../assets/user/Joshua.png";
import Judith from "../../assets/user/Judith.png";
import linda from "../../assets/user/linda.png";
import Martin from "../../assets/user/Martin.png";
import Matilda from "../../assets/user/Matilda.png";
import stephen from "../../assets/user/stephen.png";
import Chidinma from "../../assets/user/Chidinma.png";
import chukwuma from "../../assets/user/chukwuma.png";

const ourteam = () => {
  return (
    <>
      <Navbar />
      <section className="about_wrapper">
        <div className="about_container">
          <h1 className="about_h1">About Us</h1>
          <div className="about_nav">
            <ul className="about-Menu active">
              <li className="about-item">
                <Link to="/aboutus" className="about-links">
                  About Us
                </Link>
              </li>
              <li className="about-item">
                <Link to="/ourteam" className="about-links">
                  Our Team
                </Link>
              </li>
              <li className="about-item">
                <Link to="/faq" className="about-links">
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>
          <div className="team_img">
            <div className="team_img_container">
              <div id="team_image">
                <img src={Eunice} alt="team_member" />
              </div>
              <p>Eunice</p>
              <p>DESIGNER</p>
            </div>
            <div className="team_img_container">
              <div id="team_image">
                <img src={stephen} alt="team_member" />
              </div>
              <p>Stephen</p>
              <p>DESIGNER</p>
            </div>
            <div className="team_img_container">
              <div id="team_image">
                <img src={linda} alt="team_member" />
              </div>
              <p>Linda</p>
              <p>DESIGNER</p>
            </div>
            <div className="team_img_container">
              <div id="team_image">
                <img src={Judith} alt="team_member" />
              </div>
              <p>Judith</p>
              <p>DESIGNER</p>
            </div>
            <div className="team_img_container">
              <div id="team_image">
                <img src={Chidinma} alt="team_member" />
              </div>
              <p>Chidinma</p>
              <p>FRONT-END DEV</p>
            </div>

            <div className="team_img_container">
              <div id="team_image">
                <img src={Martin} alt="team_member" />
              </div>
              <p>Martin</p>
              <p>FRONT-END DEV</p>
            </div>

            <div className="team_img_container">
              <div id="team_image">
                <img src={ifechi} alt="team_member" />
              </div>
              <p>Ifechi</p>
              <p>BACK-END DEV</p>
            </div>

            <div className="team_img_container">
              <div id="team_image">
                <img src={Joshua} alt="team_member" />
              </div>
              <p>Joshua</p>
              <p>BACK-END DEV</p>
            </div>

            <div className="team_img_container">
              <div id="team_image">
                <img src={Matilda} alt="team_member" />
              </div>
              <p>Matilda</p>
              <p>FRONT-END DEV</p>
            </div>
            <div className="team_img_container">
              <div id="team_image">
                <img src={chukwuma} alt="team_member" />
              </div>
              <p>Chukwuma</p>
              <p>BACK-END DEV</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ourteam;
