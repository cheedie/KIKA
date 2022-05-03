import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/landing-page/Footer";
import "../../styles/StaticStyles/Aboutus.css";

const Faqs = () => {
  return (
    <>
        <Navbar />
        <section className='about_wrapper'>
            <div className='about_container'>
                <h1 className='about_h1'>Frequently Asked Questions</h1>
                <div className='about_nav'>
                    <ul className='about-Menu active'>
                        <li className="about-item">
                            <Link to='/aboutus' className="about-links">
                                About Us
                            </Link>
                        </li>
                        <li className="about-item">
                            <Link to='/ourteam' className="about-links">
                                Our Team
                            </Link>
                        </li>
                        <li className="about-item">
                            <Link to='/faq' className="about-links">
                                FAQ's
                            </Link>
                        </li>
                    </ul>
                </div>
                <FAQ />
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Faqs


function FAQ() {
    const [select, setSelect] = useState(null);

    const toggle = (index) => {
        if (select === index) {
            return setSelect(null)
        }
        setSelect(index)
    }
    const data = [
        {
            question: 'Who can use KIKA?',
            answer: 'Those looking to buy affordable clothes or those who want to sell items.',
        },
        {
            question: 'Is KIKA free?',
            answer: 'Yes',
        },
        {
            question: 'Does KIKA deliver nationwide?',
            answer: 'We deliver to all states within',
        },
        {
            question: 'Is it safe to pay using my card on KIKA?',
            answer: 'Absolutely',
        },
        {
            question: 'Will I get customers on KIKA?',
            answer: 'Definitely. We provide the platform for you to reaach more audience.',
        },
    ];
    return (
        <div className="accordion_container">
            {data.map((item, index) => (
                <div className="item">
                    <div className="title_faq" onClick={() => toggle(index)}>
                        <h4>{item.question}</h4>
                        <span className='plus_faq'>{select === index ? '-' : '+'}</span>
                    </div>
                    <div className={select === index ? 'content_faq show' : 'content_faq'}>{item.answer}</div>
                </div>
            ))}       
        </div>
    );
}