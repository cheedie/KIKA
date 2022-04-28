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
    zIndex: '-100',
  });

  return (
    <section className="navbar">
      {/* start logo */}
      <Link to="/">
        <img className="logo" src={Logo} alt="kika logo" />
      </Link>

      <section className="nav__rightSection">
        {/* start navlinks */}
        <ul className="nav__linksContainer">
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li
            onMouseEnter={() =>
              setMarketPlaceMenu({
                opacity: '1',
                zIndex: '2',
              })
            }
            onMouseLeave={() =>
              setMarketPlaceMenu({ opacity: '0', zIndex: '-100' })
            }
          >
            <Link to="/products">Market Place</Link>
          </li>

          <li>About Us</li>
          <li>Sell on KIKA</li>
        </ul>
        {/*end navlinks */}

        {/* start drop downs */}
        <div
          className="marketPlace__dropDown"
          style={marketPlaceMenu}
          onMouseEnter={() =>
            setMarketPlaceMenu({ opacity: '1', zIndex: '2' })
          }
          onMouseLeave={() =>
            setMarketPlaceMenu({ opacity: '0', zIndex: '-100' })
          }
        >
          <div
            onClick={() =>
              setMarketPlaceMenu({ opacity: '0', zIndex: '-100' })
            }
          >
            <p>Shop Men</p>
          </div>
          <div
            onClick={() =>
              setMarketPlaceMenu({ opacity: '0', zIndex: '-100' })
            }
          >
            <p>Shop Women</p>
          </div>
        </div>

        <div
          className="profile__dropDown"
          style={profileMenu}
          onMouseEnter={() => {
            setProfileMenu({
              opacity: '1',
            });
          }}
          onMouseLeave={() => {
            setProfileMenu({
              opacity: '0',
              zIndex: '-100',
            });
          }}
        >
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

        {/** start sign in cart and toggle */}
        <section className="nav__profile">
          <div
            className="profile__imgContainer"
            onMouseEnter={() => {
              setProfileMenu({
                opacity: '1',
              });
            }}
            onMouseLeave={() => {
              setProfileMenu({
                opacity: '0',
                zIndex: '-100',
              });
            }}
          >
            <img src={Profile} alt="shopping cart" />
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
        </section>
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
    </section>
  );
};
export default Navbar;
