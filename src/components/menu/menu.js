import React, { useState, useEffect } from 'react';
import './menu.css';
import MenuItem from './menu.item';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const [activeItem, setActiveItem] = useState('');
  const [scrolling, setScrolling] = useState(false);

  const handleMenuItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleLogoClick = () => {
    setActiveItem('');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 ) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="menu-wrapper">
      <div className={`fixed-menu ${scrolling ? 'fixed-menu-scroll' : ''}`}></div>
      <div className="menu-container">
        <NavLink to="/" onClick={handleLogoClick}>
          <img className="logo" src="/assets/MAQOOR.png" alt="MAQOOR logo" />
        </NavLink>
        
        <ul className="menu-list">
          <MenuItem
            name="About Us"
            link="/about"
            isActive={activeItem === 'About Us'}
            onClick={handleMenuItemClick}
          />
          <MenuItem
            name="Goals"
            link="/goals"
            isActive={activeItem === 'Goals'}
            onClick={handleMenuItemClick}
          />
          <MenuItem
            name="Teams"
            link="/teams"
            isActive={activeItem === 'Teams'}
            onClick={handleMenuItemClick}
          />
          <MenuItem
            name="Contact"
            link="/contact"
            isActive={activeItem === 'Contact'}
            onClick={handleMenuItemClick}
          />
        </ul>
        <button className="join-button">
          <span className="join-button-text">Join Us</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
