import React from 'react'
import Navbar from "../../landing-page/Navbar";
import Footer from "../../landing-page/Footer";
import Conditions from './Conditions'
import { conditionObjOne } from './ConditionsData'

const termConditions = () => {
  return (
    <>
        <Navbar />
        <section>
            <div className='terms_header'>
                <h2>Terms and Conditions</h2>    
            </div>
            <div>
                <Conditions {...conditionObjOne} />
            </div>  
        </section>
        <Footer />
    </>
  )
}

export default termConditions