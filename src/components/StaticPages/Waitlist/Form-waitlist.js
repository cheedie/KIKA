import React from 'react'
import { Link } from "react-router-dom";
import '../../../styles/StaticStyles/Waitlist.css'
import ThriftImage from "../../../assets/StaticPages/thrift_image.svg";


const FormWaitlist = () => {
  return (
    <>
        <section className='hero_WaitContainer'>
            <div className='hero_WaitRow' id='form_WaitRow'>
                <div className="form_WaitImg">
                    <img src={ThriftImage} alt='Kika form Image' />
                </div>   
                <div className="form_Wait">
                    <h1 className='form_headline'>Be the <span className='span_wait'>first</span> to know when we <span className='span_wait'>launch</span>!!!</h1>
                    <form id="waitlist_input" className="waitlist_input"> 
                        <input type="text" placeholder="Full name" />
                        <input type="text" placeholder="Email address" />
                        <input type="text" placeholder="Nationality" />
                    </form>
                    <button type="submit" id='waitlist-btn' className="waitlist-btn">
                        <Link to='' >
                            JOIN THE WAILIST
                        </Link>
                    </button>
                </div>
               
            </div> 
            <footer className='waitlist_footer'>
                <div>
                    <p>&copy; 2022 KIKA</p>
                </div>  
            </footer>   
        </section>
    </>
  )
}

export default FormWaitlist