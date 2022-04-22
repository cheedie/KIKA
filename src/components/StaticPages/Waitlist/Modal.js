import React from 'react'
import { Link } from 'react-router-dom'
import "../../../styles/StaticStyles/Modal.css";
import LogoImage from "../../../assets/landing-page/logo.png";
// import JoinImg from "../../assets/StaticPages/join_waitlist.png"

const Modal = ({ closeModal }) => { 
  return (
    <>
        <div className='modalBackground'>
            <div className='modal_container'>
                <div className='CloseBtn'>
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className='modal_title'>
                    <h1>Thank you for joining our waitlist!!!</h1>
                </div>
                <div className='modal_body'>
                    <img src={LogoImage} alt='' />
                </div>
                <div className='modal_footer'>
                    <button onClick={() => closeModal(false)} className="modal-btn" id='modal_btn'>
                        <Link to="" >
                            Go back
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal