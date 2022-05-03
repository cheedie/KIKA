import React, { useContext } from 'react';
import NavbarContext from '../../context/navbar_context';
import profileIcon from '../../assets/navbar/profile.png';
import Cart from '../../assets/navbar/cart.png';
import { Link } from 'react-router-dom';
import '../../styles/navbar/profile.scss';

const Profile = () => {
  const {
    status,
    setStatus,
    setProfileMenu,
    showLinks,
    profileMenu,
    setShowLinks,
  } = useContext(NavbarContext);
  return (
    <div>
      <section className="nav__profile">
        <div
          className="profile__imgContainer"
          onMouseEnter={() => {
            setProfileMenu({
              opacity: '1',
              zIndex: '2',
            });
          }}
          onMouseLeave={() => {
            setProfileMenu({
              opacity: '0',
              zIndex: '-100',
            });
          }}
        >
          <img src={profileIcon} alt="shopping cart" />
        </div>
        <Link to="/mycart">
          <div className="cart">
            <img src={Cart} alt="shopping cart" />
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

      {/* dropdown */}
      <div
        className="profile__dropDown"
        style={profileMenu}
        onMouseEnter={() => {
          setProfileMenu({
            opacity: '1',
            zIndex: '2',
          });
        }}
        onMouseLeave={() => {
          setProfileMenu({
            opacity: '0',
            zIndex: '-100',
          });
        }}
      >
        <Link to="/buyer/signin">
          <div
            onClick={() =>
              setProfileMenu({
                opacity: '0',
              })
            }
          >
            <p>Sign in</p>
          </div>
        </Link>
        <Link to="/buyer/signup">
          <div
            onClick={() =>
              setProfileMenu({
                opacity: '0',
                zIndex: '-100',
              })
            }
          >
            <p>Sign up</p>
          </div>
        </Link>

        <Link to="/user/account">
          <div
            onClick={() =>
              setProfileMenu({
                opacity: '0',
                zIndex: '-100',
              })
            }
          >
            <p>Account</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
