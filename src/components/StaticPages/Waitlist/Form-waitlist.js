import React from 'react'
import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import '../../../styles/StaticStyles/Waitlist.css'
import ThriftImage from "../../../assets/StaticPages/thrift_image.svg";


const FormWaitlist = () => {
    const [state, handleSubmit] = useForm("xoqrkwae");
  if (state.succeeded) {
      return <p>Thanks for joining our waitlist!</p>;
  }
  return (
    <>
        <section className='hero_WaitContainer'>
            <div className='hero_WaitRow' id='form_WaitRow'>
                <div className="form_WaitImg">
                    <img src={ThriftImage} alt='Kika form Image' />
                </div>   
                <div className="form_Wait">
                    <h1 className='form_headline'>Be the <span className='span_wait'>first</span> to know when we <span className='span_wait'>launch</span>!!!</h1>
                    <form onSubmit={handleSubmit} id="waitlist_input" className="waitlist_input"> 
                        <input id="name"
                            type="text"
                            name="name" 
                            placeholder="Full name" />
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />
                        <input id="email"
                            type="email" 
                            name="email" 
                            placeholder="Email address" />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <input id="nationality"
                            type="text"
                            name="nationality"
                            placeholder="Nationality" />
                        <ValidationError 
                            prefix="Nationality" 
                            field="nationality"
                            errors={state.errors}
                        />
                        <div className='align_right'>
                            <button type="submit" disabled={state.submitting} id='waitlist-btn' className="waitlist-btn">
                                JOIN THE WAILIST
                            </button>
                        </div>
                    </form>  
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