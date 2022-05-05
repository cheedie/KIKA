import React, { useState, useContext } from "react";
import Logo from "../../assets/landing-page/logo.png";
import Search from "../../assets/landing-page/search.png";
import Cart from "../../assets/landing-page/cart.png";
import Profile from "../../assets/landing-page/profile.png";
import "../../styles/landing/navbar.scss";
import { Link } from "react-router-dom";
import NavbarContext from "../../context/navbar_context";
import { useCartContext } from "../../context/cart_context";

const Navbar = () => {
  // const searchItem = e.target.value;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);
  const { keyWord, changeKeyWord } = useContext(NavbarContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { cart } = useCartContext();
  const [showLinks, setShowLinks] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [status, setStatus] = useState("close");
  const [profileMenu, setProfileMenu] = useState({
    opacity: "0",
  });
  const [marketPlaceMenu, setMarketPlaceMenu] = useState({
    opacity: "0",
    zIndex: "-100",
  });
  const showDropDown = () => {
    setMarketPlaceMenu({
      opacity: "1",
      zIndex: "2",
    });
  };
  const hideDropDown = () => {
    setMarketPlaceMenu({
      opacity: "0",
      zIndex: "-100",
    });
  };

  return (
    <section className="navbar">
      {/* start logo */}
      <Link to="/">
        <img className="logo" src={Logo} alt="kika logo" />
      </Link>

      <section className="nav__rightSection">
        {/* start navlinks */}
        <ul className="nav__linksContainer">
          <Link
            to="/home"
            style={{
              color: "#2e3192",
            }}
          >
            <li>Home</li>
          </Link>

          <Link
            to="/products"
            style={{
              color: "#2e3192",
            }}
          >
            <li>MarketPlace</li>
          </Link>

          <Link
            to="/aboutus"
            style={{
              color: "#2e3192",
            }}
          >
            <li>About Us</li>
          </Link>
          {/* <Link to="/vendor/signup" > */}
          <div
            style={{
              cursor: "pointer",
              position: "relative",
              color: "#2e3192",
            }}
            onClick={() => setIsVendorModalOpen(!isVendorModalOpen)}
          >
            <p>Sell on kika</p>

            {isVendorModalOpen && (
              <div className="drop-down-overlay-kika">
                <div className="drop-down-content">
                  <div className="drop-down-center">
                    <Link to="/vendor/signin">Sign in</Link>

                    <Link to="/vendor/signup">Sign up</Link>
                    <Link to="/vendor/">Account</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <li>Sell on KIKA</li> */}
          {/* </Link> */}
        </ul>
        {/*end navlinks */}

        {/* start search form */}
        <form className="nav__searchForm" onSubmit={handleSubmit}>
          <input
            className="nav__searchBar show-modal"
            type="text"
            placeholder="Search"
            onChange={changeKeyWord}
          />
          <Link to="/search">
            <button
              className="span"
              type="submit"
              onClick={() => {
                setShowSearch(!showSearch);
              }}
            >
              <img className="nav__searchIcon" src={Search} alt="Search Icon" />
            </button>
          </Link>
        </form>
        {/* end search form */}

        {/** start sign in cart and toggle */}
        <section className="nav__profile">
          <div
            style={{
              cursor: "pointer",
            }}
            className="profile__imgContainer"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <i className="fa fa-user fa-2x"></i>

            {isModalOpen && (
              <div className="drop-down-overlay">
                <div className="drop-down-content">
                  <div className="drop-down-center">
                    <Link to="/user/signin">Sign in</Link>

                    <Link to="/user/signup">Sign up</Link>
                    <Link to="/user/account">Account</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/mycart">
            <div className="cart">
              <i class="fas fa-shopping-cart" style={{ fontSize: "25px" }}></i>
              <span
                style={{
                  display: "inline-flex",
                  height: "20px",
                  width: "20px",
                  justifyContent: "center",
                  background: "#f15a24",
                  alignItems: "center",
                  color: "white",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "-0.85rem",
                  right: "-0.85rem",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {cart.length}
              </span>
            </div>
          </Link>

          <div
            className="nav__sidebarToggle"
            onClick={() => {
              setShowLinks(!showLinks);
              setStatus(status === "open" ? "close" : "open");
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
            setStatus("close");
          }}
          className={`${
            showLinks ? "mobile__sideBar show__sideBar" : "mobile__sideBar"
          }`}
        >
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li>Market Place</li>
          </Link>
          <Link to="/aboutus">
            <li>About Us</li>
          </Link>
          <Link to="/vendor/signup">
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
            showSearch ? "mobile__search show__mobileSearch" : "mobile__search"
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