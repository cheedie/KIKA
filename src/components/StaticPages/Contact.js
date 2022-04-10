import React from 'react'
import { Link } from "react-router-dom";
import { HiMail, HiPhone } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import Navbar from "../landing-page/Navbar";
import Footer from "../landing-page/Footer";
import "../../styles/StaticPages/Contact.css";


const Contact = () => {

  return (
    <>
      <Navbar />
      <section className='contact_container'>
        <div className='contact_row'>
          <div className='contact_section'>
            <h2 className='info-header'>Contact Us</h2>
            <form id="contact_input" className="contact_input">
              <label> Full Name 
                <input type="text" />
              </label>
              <label> Phone Number 
                <input type="phone number" />
              </label>
              <label> Email Address
                <input type="email" />
              </label>
              <label> Write a message <br/>
                <textarea />
              </label>
            </form>
            <div className="contact-btn-container">
              <button type="submit" id='contact-btn' className="contact-btn">
                <Link
                  to=''
                  onClick={(e) => {
                    window.location.href = "mailto:kikathriftstore@gmail.com";
                    e.preventDefault();
                  }} >
                    SEND MESSAGE
                  </Link>
              </button>
            </div>
          </div>
          <div className="info_section">
            <h2 className='info-header'>Contact Information</h2>
            <div className='mail_contact'>
              <div className='info_icon'>
                  <HiMail className='hiIcon' />
              </div>
              <div className='info_mail'>
                <Link
                  className='support'
                  to=''
                  onClick={(e) => {
                    window.location.href = "mailto:support@kika.com";
                    e.preventDefault();
                  }} >
                    support@kika.com
                </Link>
                <Link
                  className='support'
                  to=''
                  onClick={(e) => {
                    window.location.href = "mailto:contact@kika.com";
                    e.preventDefault();
                  }} >
                    contact@kika.com
                  </Link>
              </div>
            </div>
            <div className='number_contact'>
              <div className='info_icon'>
                  <HiPhone className='hiIcon' />
              </div>
              <div className='info_number'>
                <Link
                  className='number'
                  to=''
                  onClick={(e) => {
                    window.location.href = "tel:+234-908-875-6543";
                    e.preventDefault();
                  }} >
                    +234-908-875-6543
                </Link>
                <Link
                  className='number'
                  to=''
                  onClick={(e) => {
                    window.location.href = "tel:+234-807-874-8974";
                    e.preventDefault();
                  }} >
                    +234-807-874-8974
                </Link>
                <Link
                  className='number'
                  to=''
                  onClick={(e) => {
                    window.location.href = "tel:+234-807-874-8974";
                    e.preventDefault();
                  }} >
                    +234-807-874-8974
                </Link>
              </div>
            </div>
            <div className='contact_social'>
                <FaTwitter className='social_icon' />
                <AiFillInstagram className='social_icon' />
                <FaFacebookF className='social_icon' />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact