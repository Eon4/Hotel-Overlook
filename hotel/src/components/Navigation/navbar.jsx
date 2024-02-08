import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";
import Logo from "../../assets/img/logo.svg";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Navbar = ({ footerStyle }) => {
  // Determine the appropriate class based on whether it's a footer navbar
  const navbarClass = footerStyle ? `${style.navbarStyle} ${style.footerNavbarStyle}` : style.navbarStyle;


  const activeStyle = ({ isActive }) => {
    return {
        color: isActive ? '#FF0000' : '',
    }
}

const { userData, setUserData } = useContext(UserContext);

const logout = () => {
  setUserData();
};

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
          <NavLink to="/forside" style={activeStyle}>FORSIDE</NavLink>
        </li>
        <li>
          <NavLink to="/hotelsDest" style={activeStyle}>HOTELLER & DESTINATIONER</NavLink>
        </li>
        <li>
          <NavLink to="/rooms" style={activeStyle}>VÆRELSER</NavLink>
        </li>
        <li>
        <NavLink to="/reservation" style={activeStyle}>
            RESERVATION
          </NavLink>
        </li>
        {!userData ? (
          <>
            <li>
              <NavLink to="/login">LOGIN</NavLink>
            </li>
            <li>
              <NavLink to="/signup">OpretBruger</NavLink>
            </li>
          </>
        ) : (
          <div className={style.dropDown}>
            <li className={style.dropDownButton}>
              <NavLink to="/">my page</NavLink>
            </li>
            <div className={style.dropDownContent}>
              <li>
                <NavLink to="/signup">MIT PROGRAM</NavLink>
              </li>
              <li>
                <NavLink onClick={() => logout()}>LOG UD</NavLink>
              </li>
            </div>
          </div>
        )}
      </ul>
    </nav>
  );
};