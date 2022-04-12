import React, { useState } from 'react';
import Logo from '../../assets/landing-page/logo.png';
import Search from '../../assets/landing-page/search.png';
import Cart from '../../assets/landing-page/cart.png';
import {Transition} from 'react-transition-group';
import '../../styles/landing/css/navbar.css';

const duration = 500;

const defaultStyle = {
  transition: `right ${duration}ms ease-in-out`,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#fff',
  position:'absolute',
  top: "75px",
  right:"-100%",
  zIndex:100,
  width:"100%"
};

const transitionStyles = {
  entering: { right: "-100%" },
  entered: { right: 0 },
  exiting: { right: 0 },
  exited: { right: "-100%" },
};

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <section className="navbar">
      <img className="logo" src={Logo} alt="kika logo" />
      <ul className="nav__linksContainer">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Market Place</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Sell on KIKA</a>
        </li>
      </ul>
      <form className="nav__searchForm">
        <input
          className="nav__searchBar show-modal"
          type="text"
          placeholder="Search"
        />
        <span>
          <img
            className="nav__searchIcon"
            src={Search}
            alt="Search Icon"
          />
        </span>
      </form>
      <div className="nav__signIn">
        <button>Sign in</button>
        <button>Sign up</button>
        <div className="cart">
          <img src={Cart} alt="shopping cart" />
          <span>Cart</span>
        </div>

        <div
          className="nav__sidebarToggle"
          onClick={() => setShowLinks(!showLinks)}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
        {/* sidebar */}
        <Transition in={showLinks} timeout={500}>
          {(state) => (
            <ul
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Market Place</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Sell on KIKA</a>
              </li>
              <li>
                <a href="#">Sign in</a>
              </li>
              <li>
                <a href="#">Sign up</a>
              </li>
            </ul>
          )}
        </Transition>
      </div>
    </section>
  );
};

export default Navbar;

//className={`${
//              showLinks
//                ? 'nav__sideBar show__sideBar'
//                : 'nav__sideBar'
//                  }`}
