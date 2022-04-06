import React from 'react';
import Logo from '../../assets/landing-page/logo.png';
import Cart from '../../assets/landing-page/cart.png';
import '../../styles/landing/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <img src={Logo} alt="" />
      </div>
      {/* nav menu */}
      <ul className="navbar__menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Market Place</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Sell on KIKA</a>
        </li>
      </ul>
      {/* Search */}
      <form>
        <input
          className="navbar__search"
          type="text"
          placeholder="Search"
        />
      </form>
      {/* sign in */}
      <div className="navbar__signIn">
        <a href="#">Sign up</a>
        <a href="#">Sign in</a>
      </div>
      {/* cart */}
      <div className="navbar__cart">
        <img src={Cart} alt="" />
        <p>cart</p>
      </div>
    </div>
  );
};

export default Navbar;
