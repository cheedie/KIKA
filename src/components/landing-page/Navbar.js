import React, { useState } from 'react';
import Logo from '../../assets/landing-page/logo.png';
import Search from '../../assets/landing-page/search.png';
import Cart from '../../assets/landing-page/cart.png';
import Profile from '../../assets/landing-page/profile.png';
import '../../styles/landing/navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [status, setStatus] = useState('close');
  const [profileMenu, setProfileMenu] = useState({
    opacity: '0',
  });
  const [marketPlaceMenu, setMarketPlaceMenu] = useState({
    opacity: '0',
  });

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
        <Link
          to="/marketplace"
          onMouseEnter={() => setMarketPlaceMenu({ opacity: '1' })}
        >
          <li>Market Place</li>
        </Link>
        <li>About Us</li>
        <li>Sell on KIKA</li>
      </ul>
      {/*end navlinks */}

      {/* start drop downs */}
      <div className="dropdowns">
        <div
          className="marketPlace__dropDown"
          style={marketPlaceMenu}
        >
          <div onClick={() => setMarketPlaceMenu({ opacity: '0' })}>
            <p>Shop Men</p>
          </div>
          <div onClick={() => setMarketPlaceMenu({ opacity: '0' })}>
            <p>Shop Women</p>
          </div>
        </div>

        <div className="profile__dropDown" style={profileMenu}>
          <div
            onClick={() =>
              setProfileMenu({
                opacity: '0',
              })
            }
          >
            <p>Sign in</p>
          </div>
          <div
            onClick={() =>
              setProfileMenu({
                opacity: '0',
              })
            }
          >
            <p>Sign up</p>
          </div>
          <div
            onClick={() =>
              setProfileMenu({
                opacity: '0',
              })
            }
          >
            <p>Account</p>
          </div>
        </div>
      </div>
      {/* end drop downs */}

      {/* start search form */}
      <form className="nav__searchForm">
        <input
          className="nav__searchBar show-modal"
          type="text"
          placeholder="Search"
        />
        <span className="span">
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
      <div className="nav__profile">
        <div className="profile">
          <img
            src={Profile}
            alt="shopping cart"
            onMouseEnter={() => {
              setProfileMenu({
                opacity: '1',
              });
            }}
          />
        </div>
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
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/marketplace">
          <li>Market Place</li>
        </Link>
        <Link to="/aboutus">
          <li>About Us</li>
        </Link>
        <Link to="/vendor">
          <li>Sell on KIKA</li>
        </Link>
        <li>
          <button className="btn">Sign up</button>
        </li>
        <li>
          <button className="btn">Sign in</button>
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
