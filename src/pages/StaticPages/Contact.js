import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { Link } from "react-router-dom";
import { HiMail, HiPhone } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/landing-page/Footer";
import "../../styles/StaticStyles/Contact.css";


const Contact = () => {
  const [state, handleSubmit] = useForm("xpzbyrkw");
  if (state.succeeded) {
      return <p>Thanks for contacting Kika!!!</p>;
  }
  return (
    <>
      <Navbar />
      <section className='contact_container'>
        <div className='contact_row'>
          <div className='contact_section'>
            <h2 className='info-header'>Contact Us</h2>
            <form onSubmit={handleSubmit} id="contact_input" className="contact_input">
              <label htmlFor="name"> Full Name 
                <input id="name"
                    type="text"
                    name="name"  
                />
              </label>
              <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
              />
              <label htmlFor="number"> Phone Number 
                <input id="phoneNumber"
                    type="phone number" 
                    name="phoneNumber"
                />
              </label>
              <ValidationError 
                  prefix="Phone number" 
                  field="phoneNumber"
                  errors={state.errors}
              />
              <label htmlFor="email"> Email Address
                <input id="email"
                    type="email" 
                    name="email"  
                />
              </label>
              <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
              />
              <label> Write a message <br/>
                <textarea 
                  id="message"
                  name="message"
                />
              </label>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <div className="contact-btn-container">
                <button type="submit" disabled={state.submitting} id='contact-btn' className="contact-btn">
                    SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          <div className="info_section">
            <h2 className='info-header'>Contact Information</h2>
            <div className='mail_contact'>
              <div className='info_icon'>
                  <HiMail className='hiIcon' />
              </div>
              <div className='info_mail'>
                <LinkMailto
                  className='support'
                  label="support@kika.com"
                  mailto="mailto:support@kika.com" 
                />
                <LinkMailto
                  className='support'
                  label="contact@kika.com"
                  mailto="mailto:contact@kika.com" 
                />
              </div>
            </div>
            <div className='number_contact'>
              <div className='info_icon'>
                  <HiPhone className='hiIcon' />
              </div>
              <div className='info_number'>
                  <LinkTel
                    className='number'
                    number="+234-908-875-6543"
                    tel="tel:+234-908-875-6543" 
                  />
                  <LinkTel
                    className='number'
                    number="+234-807-874-8974"
                    tel="tel:+234-807-874-8974" 
                  />
                  <LinkTel
                    className='number'
                    number="+234-807-874-8974"
                    tel="tel:+234-807-874-8974" 
                  />
              </div>
            </div>
            <div className='contact_social' id='contact_social'>
              <a href="https://www.instagram.com/kikathriftstore" >
                <AiFillInstagram className='social_icon' />
              </a>
              <a href="https://www.twitter.com/KikaThrift" >
                <FaTwitter className='social_icon' />
              </a>
              <a href="facebook.com" > 
                <FaFacebookF className='social_icon' />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact



const LinkMailto = ({ mailto, label }) => {
  return (
    <Link 
      to='#'
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }} >
        {label}
    </Link>

  )
}

const LinkTel = ({ tel, number }) => {
  return (
    <Link 
      to='#'
      onClick={(e) => {
        window.location.href = tel;
        e.preventDefault();
      }} >
        {number}
    </Link>

  )
}