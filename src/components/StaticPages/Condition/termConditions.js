import React from 'react'
import Navbar from "../../landing-page/Navbar";
import Footer from "../../landing-page/Footer";
import Conditions from './Conditions'
import { conditionObjOne, conditionObjTwo, conditionObjThree, conditionObjFour, conditionObjFive } from './ConditionsData'

const termConditions = () => {
  return (
    <>
        <Navbar />
        <section>
            <div>
                <h2>Terms and Conditions</h2>    
            </div>
            <div>
                <Conditions {...conditionObjOne} />
                <Conditions {...conditionObjTwo} />
                <Conditions {...conditionObjThree} />
                <Conditions {...conditionObjFour} />
                <Conditions {...conditionObjFive} />
            </div>  
        </section>
        <Footer />
    </>
  )
}

export default termConditions