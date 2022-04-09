import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../landing-page/Navbar";
import Footer from "../landing-page/Footer";
import "../../styles/StaticPages/Error.css";
import ErrorImg from "../../assets/StaticPages/Match-not-found.svg";


const Error = () => {
  return (
    <>
      <Navbar />
      <section className='Error_container'>
        <div className='Error_section'>
          <div className='img_error'>
            <img src={ErrorImg} alt="" />
          </div>
          <h3 className='error_title'>Ooopps!!! Page not found</h3>
          <div className='btn_error'>
            <button id='contact-btn' className="contact-btn">
              <Link to='/homepage' >
                  GO TO HOMEPAGE
              </Link>
            </button>
            <button id='contact-btn' className="contact-btn">
              <Link to='' >
                  REFRESH PAGE
              </Link>
            </button>
          </div> 
        </div>  
      </section>
      <Footer />
    </>
  )
}

export default Error