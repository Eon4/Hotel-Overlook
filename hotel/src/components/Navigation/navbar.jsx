import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";
import Logo from "../../assets/img/logo.svg";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

// Functional component for the navigation bar
export const Navbar = ({ footerStyle }) => {
  // Determine the appropriate class based on whether it's a footer navbar
  const navbarClass = footerStyle ? `${style.navbarStyle} ${style.footerNavbarStyle}` : style.navbarStyle;

  // Define a function to determine the active style for NavLink
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? '#FF0000' : '',
    };
  }

  // Destructure user data and setUserData function from UserContext
  const { userData, setUserData } = useContext(UserContext);

  // Function to handle user logout
  const logout = () => {
    setUserData();
  };

  // Render the navbar
  return (
    <nav className={navbarClass}>
      {/* Conditionally render the logo only if it's not a footer navbar */}
      {!footerStyle && (
        <div className={style.navbarGrid}>
          <img src={Logo} alt="Hotel-Overlook-logo" />
        </div>
      )}

      <ul>
        {/* Navigation links */}
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
          <NavLink to="/reservation" style={activeStyle}>RESERVATION</NavLink>
        </li>

        {/* Conditional rendering based on user authentication */}
        {!userData ? (
          <>
            <li>
              <NavLink to="/login">LOGIN</NavLink>
            </li>
          </>
        ) : (
          <div className={style.dropDownContent}>
            <li className={style.dropDownButton}>
              <NavLink to="/myPage">MIN SIDE</NavLink>
            </li>
            <div className={style.dropDownContent}>
              <li>
                {/* Logout NavLink */}
                <NavLink onClick={() => logout()}>LOG UD</NavLink>
              </li>
            </div>
          </div>
        )}
      </ul>
    </nav>
  );
};
