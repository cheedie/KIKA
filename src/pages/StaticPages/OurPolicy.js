import React from 'react'
import { HashLink as Link } from "react-router-hash-link";
import Navbar from "../../components/landing-page/Navbar";
import Footer from "../../components/landing-page/Footer";
import Policy from '../../components/StaticPages/Condition/Policy'
import { policyObjOne } from '../../data/StaticPages/PolicyData'

const OurPolicy = () => {
  return (
    <>
        <Navbar />
        <section>
            <div className='terms_header'>
                <h2>Our Policy</h2>
            </div>
            <div className='terms_header'>
                <h1>Contents</h1>  
                <ul>
                  <li className="list_link">
                    <Link to='#sectionone' className='terms_header'>
                      1. About this Notice
                    </Link>
                  </li>
                  <li className="list_link">
                    <Link to="#sectiontwo" className='terms_header'>
                      2. The Data We Collect About You?
                    </Link>
                  </li>
                  <li className="list_link">
                    <Link to="#sectionthree" className='terms_header'>
                      3. Cookies and How We Use Them
                    </Link>
                  </li>
                  <li className="list_link">
                    <Link to="#sectionfour" className='terms_header'>
                      4. How We Use Your Personal Data
                    </Link>
                  </li>
                  <li className="list_link">
                    <Link to="#sectionfive" className='terms_header'>
                      5. How We Share Your Personal Data 
                    </Link>
                  </li>
                </ul>
            </div>
            <div>
                <Policy {...policyObjOne} />
            </div>  
        </section>
        <Footer />
    </>
  )
}

export default OurPolicy