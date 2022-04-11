import React from 'react'
import { Link } from "react-router-dom";
import '../../../styles/StaticStyles/Waitlist.css'
import LogoImage from "../../../assets/landing-page/logo.png";

const NavbarWaitlist = () => {
  return (
    <>
        <div className="navbar_waitlist">
            <Link to='/' className="waitlist-logo">
                <img src={LogoImage} alt="KIKA" />
            </Link>
            <div className="navbar_Waitcontainer">
                <ul className='nav-WaitMenu'>
                    <li className="nav-Waititem">
                        <Link to='' className="nav_Waitlinks">
                           Contact us
                        </Link>
                    </li>
                    <li className="nav-Waititem">
                        <Link to='' className="nav_Waitlinks">
                            About us
                        </Link>
                    </li>
                </ul>    
            </div>
        </div>
    </>
  )
}

export default NavbarWaitlist