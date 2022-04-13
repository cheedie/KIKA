import React from 'react'
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
            <div>
                <Policy {...policyObjOne} />
            </div>  
        </section>
        <Footer />
    </>
  )
}

export default OurPolicy