import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import "../../styles/StaticStyles/Aboutus.css";
import teamimg from "../../assets/StaticPages/team_img.png";

const ourteam = () => {
  return (
    <>
        <Navbar />
        <section className='about_wrapper'>
            <div className='about_container'>
                <h1 className='about_h1'>About Us</h1>
                <div className='about_nav'>
                    <ul className='about-Menu active'>
                        <li className="about-item">
                            <Link to='/aboutus' className="about-links">
                                About Us
                            </Link>
                        </li>
                        <li className="about-item">
                            <Link to='/ourteam' className="about-links">
                                Our Team
                            </Link>
                        </li>
                        <li className="about-item">
                            <Link to='/faq' className="about-links">
                                FAQ's
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='team_img'>
                    <div className="team_img_container">
                        <div id='team_image'>
                            <img src={teamimg} alt="team_member" />
                        </div>
                        <p>Eunice</p>
                        <p>POSITION</p>
                    </div>   
                    <div className="team_img_container">
                        <div id='team_image'>
                            <img src={teamimg} alt="team_member" />  
                        </div>
                        <p>Stephen</p>
                        <p>POSITION</p>
                    </div>
                    <div className="team_img_container">
                        <div id='team_image'>
                            <img src={teamimg} alt="team_member" />  
                        </div>
                        <p>Linda</p>
                        <p>POSITION</p>
                    </div>
                    <div className="team_img_container">
                        <div id='team_image'>
                            <img src={teamimg} alt="team_member" />
                        </div>
                        <p>Judith</p>
                        <p>POSITION</p>
                    </div>
                    <div className="team_img_container">
                        <div id='team_image'>
                            <img src={teamimg} alt="team_member" />
                        </div>
                        <p>Chidinma</p>
                        <p>POSITION</p>
                    </div>
                    
                    <div className="team_img_container">
                        <div id='team_image'>
                            <img src={teamimg} alt="team_member" />
                        </div>
                        <p>Martin</p>
                        <p>POSITION</p>
                    </div>
                    
                    <div className="team_img_container">
                        <div id='team_image'>
                            <img src={teamimg} alt="team_member" />
                        </div>
                        <p>Ifechi</p>
                        <p>POSITION</p>
                    </div>
                    
                    <div className="team_img_container">
                        <div id='team_image'>
                            <img src={teamimg} alt="team_member" />
                        </div>
                        <p>Joshua</p>
                        <p>POSITION</p>
                    </div>
                    
                    <div className="team_img_container">
                        <div id='team_image'>
                            <img src={teamimg} alt="team_member" />
                        </div>
                        <p>Matilda</p>
                        <p>POSITION</p>
                    </div>
                    <div className="team_img_container">
                        <div id='team_image'>
                            <img src={teamimg} alt="team_member" />
                        </div>
                        <p>Dozie</p>
                        <p>POSITION</p>
                    </div>
                </div>    
            </div>
        </section>
        <Footer />
    </>
  )
}

export default ourteam