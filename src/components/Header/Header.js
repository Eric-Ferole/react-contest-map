import React from 'react';

// Components
import Logo from '../Logo/Logo';
import Nav from '../Header/Nav/Nav';

// Style 
import './Header.scss'


const Header = (props) => {
  return(
    <div className="Header">
      <Logo />
      <Nav />
    </div>
  )
}

export default Header;