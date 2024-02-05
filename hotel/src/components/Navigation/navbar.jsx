import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";
import Logo from "../../assets/img/logo.svg";

export const Navbar = ({ footerStyle }) => {
  // Determine the appropriate class based on whether it's a footer navbar
  const navbarClass = footerStyle ? `${style.navbarStyle} ${style.footerNavbarStyle}` : style.navbarStyle;

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
          <NavLink to="/forside">FORSIDE</NavLink>
        </li>
        <li>
          <NavLink to="/hotelsDest">HOTELLER & DESTINATIONER</NavLink>
        </li>
        <li>
          <NavLink to="/rooms">VÆRELSER</NavLink>
        </li>
        <li>
          <NavLink to="/reservation">RESERVATION</NavLink>
        </li>
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
};
