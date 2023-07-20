import './menu.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const MenuItem = ({ name, link, isActive, onClick }) => {
  const handleClick = () => {
    onClick(name);
  };

  // Determine if this menu item should have the 'active' class
  const shouldHaveActiveClass = isActive && name !== 'logo';

  return (
    <li>
      <NavLink to={link} onClick={handleClick} className={shouldHaveActiveClass ? 'active' : 'menu-item'}>
        {name}
      </NavLink>
    </li>
  );
};

export default MenuItem;
