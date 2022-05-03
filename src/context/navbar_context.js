import { createContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [keyWord, setKeyWord] = useState('');

  const changeKeyWord = (e) => {
    setKeyWord(e.target.value);
  };

  const [showLinks, setShowLinks] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [status, setStatus] = useState('close');
  const [marketPlaceMenu, setMarketPlaceMenu] = useState({
    opacity: '0',
    zIndex: '-100',
  });
  const [profileMenu, setProfileMenu] = useState({
    opacity: '0',
  });
  const showDropDown = () => {
    setMarketPlaceMenu({
      opacity: '1',
      zIndex: '2',
    });
  };
  const hideDropDown = () => {
    setMarketPlaceMenu({
      opacity: '0',
      zIndex: '-100',
    });
  };

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <NavbarContext.Provider
      value={{
        keyWord,
        changeKeyWord,
        showLinks,
        showSearch,
        handleSearch,
        showDropDown,
        hideDropDown,
        status,
        profileMenu,
        marketPlaceMenu,
        setProfileMenu
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContext;
