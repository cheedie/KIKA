import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import "../../styles/StaticStyles/Aboutus.css";
import aboutimg from "../../assets/StaticPages/About.png";

const aboutus = () => {
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
                <div className='about_body'>
                    <div className='about_text'>
                        <p><span className="step_delivery">KIKA</span> is an online e-commerce product that is set out to solve the problem between thrift vendors and their already existing and potential customers. <span className="step_delivery">KIKA</span> also helps thrift vendors reach out to more customers, makes shopping thrift wears easy and less stressful for customers, makes more thrift wears available for customers, makes shopping thrift wears easier to order and be delivered.</p>
                        <p>- Making thrift stores more available to buyers and making sure that customers don't end up on the wrong side of “what I ordered isn't what I got”.</p>
                        <p>- Helping thrift vendors reach out to more customers, makingg shopping thrift wears easy and less stressful for customers, making more thrift wears available for customers and makesv shopping thrift wears easier to order and be delivered. </p>
                        <p>Research has shown that recently individuals love to wear thrift as it is very affordable and authentic. It has also been shown that most people will prefer to buy thrift popularly known as <span className="step_delivery">“OKRIKA”</span> but also find it hard to purchase it except when they find time to go to the market. Going to the market can be extremely stressful but most people really do not have a choice because they need to shop their clothes.</p>
                    </div> 
                    <div className='about_image'>
                        <img src={aboutimg} alt='kika_logo' />
                    </div>    
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default aboutus