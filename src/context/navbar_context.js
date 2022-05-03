import { createContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [keyWord, setKeyWord] = useState('');

  const changeKeyWord = (e) => {
    setKeyWord(e.target.value);
  }

  return <NavbarContext.Provider value={{keyWord, changeKeyWord}}>
    {children}
  </NavbarContext.Provider>;
};

export default NavbarContext;
