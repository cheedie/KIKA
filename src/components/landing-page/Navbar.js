import React, { useState } from 'react';
import Logo from '../../assets/landing-page/logo.png';
import Search from '../../assets/landing-page/search.png';
import Cart from '../../assets/landing-page/cart.png';
import { CSSTransition} from 'react-transition-group';
import {
  defaultStyle,
  transitionStyles,
  searchDefaultStyle,
  searchTransitionStyles,
} from './transitions';
import '../../styles/landing/css/navbar.css';

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
            onClick={() => setShowSearch(!showSearch)}
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
        <CSSTransition in={showLinks} timeout={300}>
          {(state) => (
            <ul
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              className="nav__sideBar"
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
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Sign in</a>
              </li>
            </ul>
          )}
        </CSSTransition>
        {/*mobile search */}
        <CSSTransition in={showSearch} timeout={300}>
          {(state) => (
            <section
              style={{
                ...searchDefaultStyle,
                ...searchTransitionStyles[state],
              }}
              classNames="nav__searchContainer"
            >
              <input placeholder="Search for anything" type="text" />
            </section>
          )}
        </CSSTransition>
      </div>
    </section>
  );
};

export default Navbar;
