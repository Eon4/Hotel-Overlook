import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";
import Logo from "../../assets/img/logo.svg";

export const Navbar = ({ footerStyle }) => {
  // Determine the appropriate class based on whether it's a footer navbar
  const navbarClass = footerStyle ? `${style.navbarStyle} ${style.footerNavbarStyle}` : style.navbarStyle;

  const activeStyle = ({ isActive }) => {
    return {
        color: isActive ? '#FF0000' : '',
        // textDecoration: isActive ? '' : 'underline'
    }
}

  return (
    // Render the navbar with the determined class
    <nav className={navbarClass}>
      {/* Conditionally render the logo only if it's not a footer navbar */}
      {!footerStyle && (
        <div className={style.navbarGrid}>
          <img src={Logo} alt="Hotel-Overlook-logo" />
        </div>
        )}

      <ul> 
        <li>
          <NavLink to="/forside" style={activeStyle}>Forside</NavLink>
        </li>
        <li>
          <NavLink to="/hotelsDest" style={activeStyle}>HOTELLER & DESTINATIONER</NavLink>
        </li>
        <li>
          <NavLink to="/rooms" style={activeStyle}>VÆRELSER</NavLink>
        </li>
        <li>
          <NavLink to="/reservation" style={activeStyle}>RESERVATION</NavLink>
        </li>
        <li>
          <NavLink to="/login" style={activeStyle}>LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
};
