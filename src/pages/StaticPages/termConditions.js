import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/landing-page/Footer";
import Conditions from '../../components/StaticPages/Condition/Conditions'
import { conditionObjOne } from '../../data/StaticPages/ConditionsData'

const termConditions = () => {
  return (
    <>
        <Navbar />
        <section>
            <div className='terms_header'>
                <h2>TERMS AND CONDITIONS</h2>    
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