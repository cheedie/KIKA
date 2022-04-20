import React, { useState } from 'react';
import Logo from '../../assets/landing-page/logo.png';
import Search from '../../assets/landing-page/search.png';
import Cart from '../../assets/landing-page/cart.png';
import '../../styles/landing/css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [status, setStatus] = useState('close');

  return (
    <section className="navbar">
      {/* start logo */}
      <Link to="/">
        <img className="logo" src={Logo} alt="kika logo" />
      </Link>

      {/* start navlinks */}
      <ul className="nav__linksContainer">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/marketplace">
          <li>Market Place</li>
        </Link>
          <li>About Us</li>
          <li>Sell on KIKA</li>
      </ul>
      {/*end navlinks */}

      {/* start search form */}
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
      {/* end search form */}

      {/* start sign in cart and toggle */}
      <div className="nav__signIn">
        <Link to="/user/signup">
          <button>Sign up</button>
        </Link>
        <Link to="/user/signin">
          <button>Sign in</button>
        </Link>
        <Link to="/mycart">
          <div className="cart">
            <img src={Cart} alt="shopping cart" />
            <span>Cart</span>
          </div>
        </Link>

        <div
          className="nav__sidebarToggle"
          onClick={() => {
            setShowLinks(!showLinks);
            setStatus(status === 'open' ? 'close' : 'open');
          }}
        >
          <div className={`${status} line line1`}></div>
          <div className={`${status} line line2`}></div>
          <div className={`${status} line line3`}></div>
        </div>
      </div>
      {/* end signIn cart and toggle */}

      {/* ========= start mobile sidebar =========== */}
      <ul
        onClick={() => {
          setShowLinks(!showLinks);
          setStatus('close');
        }}
        className={`${
          showLinks
            ? 'mobile__sideBar show__sideBar'
            : 'mobile__sideBar'
        }`}
      >
        <li>
          <a href="/home">Home</a>
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
          <a className="btn" href="#">
            Sign up
          </a>
        </li>
        <li>
          <a className="btn" href="#">
            Sign in
          </a>
        </li>
      </ul>
      {/* end mobile sidebar */}

      <div
        className={`${
          showSearch
            ? 'mobile__search show__mobileSearch'
            : 'mobile__search'
        }`}
      >
        <input
          type="text"
          placeholder="Search for anything"
          className="searchBar"
        />
        <img src={Search} alt="search logo" />
      </div>
    </section>
  );
};
export default Navbar;
