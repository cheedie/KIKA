import React from 'react'
import { Link } from "react-router-dom";
import '../../../styles/StaticStyles/Waitlist.css'
import HeroImage from "../../../assets/StaticPages/Hero_Image.svg";

const HeroWaitlist = () => {
  return (
    <>
        <section className='hero_WaitContainer'>
            <div className='hero_WaitRow'>
                <div className="hero_WaitWriteup">
                    <h1 className='headline_wait'>Your one stop for<span className='span_wait'><br/>THRIFT WEARS</span></h1>
                    <p className='hero_WaitDesc'>We're your home for all thrift wears. All thrift lovers, vendors and enthusiasts are welcome here.</p>
                    <p className='hero_WaitDesc'>KIKA is an online platform that's breaching the gap between thrift vendors and lovers. We make shopping and selling thrift easy and swift. </p>
                    <p className='hero_WaitDesc'>At KIKA what you ordered is what you are getting and we help vendors generate sales on their thrift wears without stress.</p>
                    <button type="submit" id='waitlist-btn' className="waitlist-btn">
                        <Link to='' >
                            JOIN THE WAILIST
                        </Link>
                    </button>
                </div>
                <div className="hero_WaitImg">
                    <img src={HeroImage} alt='Kika Hero Image' />
                </div>    
            </div>    
        </section>
    
    </>
  )
}

export default HeroWaitlist